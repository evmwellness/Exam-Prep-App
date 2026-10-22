"""Cut graded masters into a reel: trim dead air, alternate virtual camera
angles, flag look-aways for b-roll, reserve the 0.2s hook slot.

usage: python3 -I assemble.py WORK_DIR OUT.mp4 CLIP1 [CLIP2 ...]
WORK_DIR must hold <stem>.mp4 + <stem>.json from process_clip.py for each clip.
Writes OUT.mp4 and cut_sheet.md / cut_sheet.json next to it.
"""
import json
import os
import re
import subprocess
import sys

od, final, *clips = sys.argv[1:]
W, H, FPS = 1080, 1920, 30
PAD_IN, PAD_OUT, MAX_SHOT = 0.08, 0.14, 3.0
LOOK_MIN = 12  # frames (0.4s) of no-eyes before it counts as looking away
HOOK_SLOT = 0.2  # seconds reserved at the top for b-roll

# angle: (zoom, face x-anchor 0..1 in frame, eye-line y-anchor 0..1 in frame)
ANGLES = {
    "WIDE": (1.00, None, None),
    "MEDIUM": (1.25, 0.50, 0.44),
    "CLOSE": (1.55, 0.50, 0.46),
    "OFFSET": (1.20, 0.40, 0.42),  # rule-of-thirds, leaves look-room
}
CYCLE = ["MEDIUM", "WIDE", "CLOSE", "OFFSET", "WIDE", "MEDIUM", "CLOSE", "WIDE"]


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def stem(p):
    return os.path.splitext(os.path.basename(p))[0]


def speech_spans(src, dur):
    log = run(["ffmpeg", "-i", src, "-af", "highpass=f=80,silencedetect=noise=-35dB:d=0.3",
               "-vn", "-f", "null", "-"]).stderr
    st = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", log)]
    en = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", log)]
    sil = list(zip(st, en + [dur] * (len(st) - len(en))))
    spans, t = [], 0.0
    for a, b in sil:
        if a - t > 0.15:
            spans.append([max(0, t - PAD_IN), min(dur, a + PAD_OUT)])
        t = b
    if dur - t > 0.15:
        spans.append([max(0, t - PAD_IN), dur])
    return spans


def look_aways(track, gap=4):
    bad_f = [(not x["det"]) or x["eyes"] == 0 for x in track]
    # bridge short eye re-detections inside a look-away
    for i in range(len(bad_f)):
        if not bad_f[i] and any(bad_f[max(0, i - gap):i]) and any(bad_f[i + 1:i + 1 + gap]):
            bad_f[i] = True
    runs, start = [], None
    for x, bad in zip(track + [{"f": len(track)}], bad_f + [False]):
        if bad and start is None:
            start = x["f"]
        elif not bad and start is not None:
            if x["f"] - start >= LOOK_MIN:
                runs.append((start / FPS, x["f"] / FPS))
            start = None
    return runs


def crop_for(angle, track, a, b):
    z, ax, ay = ANGLES[angle]
    if z == 1.0:
        return None
    fr = [x["face"] for x in track[int(a * FPS):int(b * FPS) + 1]] or [track[-1]["face"]]
    fr.sort(key=lambda r: r[0])
    fx, fy, fw, fh = fr[len(fr) // 2]  # median-ish face box for a locked-off shot
    cw, ch = round(W / z / 2) * 2, round(H / z / 2) * 2
    eye_x, eye_y = fx + fw / 2, fy + fh * 0.42
    x = min(max(0, eye_x - cw * ax), W - cw)
    y = min(max(0, eye_y - ch * ay), H - ch)
    return cw, ch, int(x), int(y)


shots = []
for src in clips:
    n = stem(src)
    master, track = f"{od}/{n}.mp4", json.load(open(f"{od}/{n}.json"))
    dur = len(track) / FPS
    looks = look_aways(track)
    for a, b in speech_spans(src, dur):
        # split long takes so the angle changes every ~MAX_SHOT seconds,
        # and cut at every look-away boundary
        cuts = {a, b}
        for la, lb in looks:
            for c in (la, lb):
                if a + 0.3 < c < b - 0.3:
                    cuts.add(c)
        cuts = sorted(cuts)
        pieces = []
        for s, e in zip(cuts, cuts[1:]):
            k = max(1, round((e - s) / MAX_SHOT))
            pieces += [(s + (e - s) * i / k, s + (e - s) * (i + 1) / k) for i in range(k)]
        for s, e in pieces:
            look = sum(max(0, min(e, lb) - max(s, la)) for la, lb in looks) >= 0.4 * (e - s)
            shots.append({"clip": n, "src": src, "master": master, "in": round(s, 3),
                          "out": round(e, 3), "look_away": look, "track": track})

# assign angles: never repeat back-to-back
i = 0
for k, sh in enumerate(shots):
    ang = CYCLE[i % len(CYCLE)]
    if k and ang == shots[k - 1]["angle"]:
        i += 1
        ang = CYCLE[i % len(CYCLE)]
    sh["angle"] = ang
    i += 1

seg_dir = f"{od}/seg"
os.makedirs(seg_dir, exist_ok=True)
lst, t, rows = [], 0.0, []
for k, sh in enumerate(shots):
    d = sh["out"] - sh["in"]
    c = crop_for(sh["angle"], sh["track"], sh["in"], sh["out"])
    vf = "null" if c is None else f"crop={c[0]}:{c[1]}:{c[2]}:{c[3]},scale={W}:{H}:flags=lanczos,unsharp=5:5:0.45"
    out = f"{seg_dir}/{k:03d}.mp4"
    r = run(["ffmpeg", "-v", "error", "-y",
             "-ss", str(sh["in"]), "-t", f"{d:.3f}", "-i", sh["master"],
             "-ss", str(sh["in"]), "-t", f"{d:.3f}", "-i", sh["src"],
             "-filter_complex",
             f"[0:v]{vf},fps={FPS},format=yuv420p[v];"
             f"[1:a]aresample=48000,afade=t=in:d=0.015,afade=t=out:st={max(0, d - 0.02):.3f}:d=0.02[a]",
             "-map", "[v]", "-map", "[a]", "-c:v", "libx264", "-crf", "16", "-preset", "medium",
             "-c:a", "pcm_s16le", out])
    if r.returncode:
        sys.exit(r.stderr)
    lst.append(f"file '{os.path.abspath(out)}'")
    rows.append({"shot": k + 1, "start": round(t, 2), "end": round(t + d, 2), "angle": sh["angle"],
                 "clip": sh["clip"], "src_in": sh["in"], "src_out": sh["out"],
                 "look_away": sh["look_away"]})
    t += d

open(f"{seg_dir}/list.txt", "w").write("\n".join(lst))
r = run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", f"{seg_dir}/list.txt",
         "-af", "highpass=f=80,acompressor=threshold=-20dB:ratio=3:attack=5:release=120,loudnorm=I=-14:TP=-1.5:LRA=9",
         "-c:v", "libx264", "-crf", "18", "-preset", "slow", "-profile:v", "high", "-pix_fmt", "yuv420p",
         "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-movflags", "+faststart", final])
if r.returncode:
    sys.exit(r.stderr)

# cut sheet: human (markdown) + machine (json, for the app UI)
base = os.path.splitext(final)[0]
json.dump({"duration": round(t, 2), "hook_broll_slot": [0, HOOK_SLOT], "shots": rows},
          open(f"{base}_cut_sheet.json", "w"), indent=1)
fmt = lambda s: f"{int(s // 60):02d}:{s % 60:05.2f}"
md = ["| # | Reel time | Angle | Source clip | Source in-out | Note |", "|---|---|---|---|---|---|",
      f"| 0 | 00:00.00-{fmt(HOOK_SLOT)} | B-ROLL HOOK | | | Drop b-roll on top of shot 1 here |"]
for r_ in rows:
    note = "LOOKING DOWN: cover with b-roll" if r_["look_away"] else ""
    md.append(f"| {r_['shot']} | {fmt(r_['start'])}-{fmt(r_['end'])} | {r_['angle']} | {r_['clip']} | "
              f"{r_['src_in']:.2f}-{r_['src_out']:.2f}s | {note} |")
open(f"{base}_cut_sheet.md", "w").write("\n".join(md) + "\n")
print(f"{len(rows)} shots, {t:.1f}s, {sum(r_['look_away'] for r_ in rows)} look-away shots -> {final}")
