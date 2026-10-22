"""Per-clip pass: background replacement, face relight, gaze/face tracking.

usage: python3 -I process_clip.py IN.mov BG.png SEG.tflite OUT.mp4 OUT_track.json
Writes a 1080x1920 graded master (video only) and per-frame tracking data.
"""
import json
import subprocess
import sys

import cv2
import numpy as np
from ai_edge_litert.interpreter import Interpreter

W, H = 1080, 1920
src, bg_path, seg_path, out_path, track_path = sys.argv[1:6]

# ---------- models ----------
seg = Interpreter(seg_path, num_threads=1)
seg.allocate_tensors()
seg_in = seg.get_input_details()[0]["index"]
seg_out = seg.get_output_details()[0]["index"]
face_cc = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
eye_cc = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_eye.xml")

bg = cv2.cvtColor(cv2.imread(bg_path), cv2.COLOR_BGR2RGB).astype(np.float32) / 255.0
bg = cv2.resize(bg, (W, H)) * np.float32(0.9)  # sit plate slightly below subject
bg_soft = cv2.GaussianBlur(bg, (0, 0), 40)  # for light wrap

# ---------- grading helpers ----------
def s_curve(x, amt=0.12):
    return np.clip(x + amt * (x - x * x) * (2 * x - 1), 0, 1)  # gentle contrast


def warm(img, r=1.025, g=1.0, b=0.965):
    return np.clip(img * np.array([r, g, b], np.float32), 0, 1)


q = 4  # light maps computed at 1/4 res
yy, xx = np.mgrid[0:H:q, 0:W:q].astype(np.float32)
vig = (1 - 0.16 * (((xx - W / 2) / (W * 0.75)) ** 2 + ((yy - H * 0.42) / (H * 0.7)) ** 2))
vig = cv2.resize(vig, (W, H))[..., None]


def key_light(face):
    """Soft warm key from camera-left (matches the lamp in the plate) + fill."""
    fx, fy, fw, fh = face
    cx, cy = fx + fw * 0.38, fy + fh * 0.42  # offset toward camera-left
    rx, ry = fw * 1.1, fh * 1.25
    d = ((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2
    return cv2.resize(np.exp(-d * 1.6), (W, H))[..., None]


# ---------- io ----------
dec = subprocess.Popen(
    ["ffmpeg", "-v", "error", "-i", src, "-f", "rawvideo", "-pix_fmt", "rgb24",
     "-vf", f"scale={W}:{H}", "-"], stdout=subprocess.PIPE)
enc = subprocess.Popen(
    ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
     "-r", "30", "-i", "-", "-c:v", "libx264", "-preset", "medium", "-crf", "16",
     "-pix_fmt", "yuv420p", out_path], stdin=subprocess.PIPE)

prev_mask = None
face = None  # smoothed (x, y, w, h)
track = []
n = 0
while True:
    buf = dec.stdout.read(W * H * 3)
    if len(buf) < W * H * 3:
        break
    rgb = np.frombuffer(buf, np.uint8).reshape(H, W, 3)
    f = rgb.astype(np.float32) / 255.0

    # --- segmentation (temporal EMA + guided-filter edge refine) ---
    small = cv2.resize(f, (256, 256), interpolation=cv2.INTER_AREA)
    seg.set_tensor(seg_in, small[None])
    seg.invoke()
    m = seg.get_tensor(seg_out)[0, :, :, 0]
    half = cv2.resize(rgb, (W // 2, H // 2), interpolation=cv2.INTER_AREA)
    m = cv2.resize(m, (W // 2, H // 2), interpolation=cv2.INTER_LINEAR)
    prev_mask = m if prev_mask is None else 0.55 * m + 0.45 * prev_mask
    m = np.clip((prev_mask - 0.22) / 0.45, 0, 1)
    m = cv2.ximgproc.guidedFilter(half, (m * 255).astype(np.uint8), 8, 4e-3 * 255 * 255)
    m = cv2.resize(m, (W, H), interpolation=cv2.INTER_LINEAR).astype(np.float32) / 255
    m = np.clip(m * 1.08, 0, 1)[..., None]

    # --- face + eyes (detect every frame on a downscaled copy) ---
    gray = cv2.cvtColor(cv2.resize(rgb, (W // 3, H // 3)), cv2.COLOR_RGB2GRAY)
    faces = face_cc.detectMultiScale(gray, 1.1, 6, minSize=(80, 80))
    eyes = 0
    raw = None
    if len(faces):
        x, y, w, h = max(faces, key=lambda r: r[2] * r[3])
        raw = np.array([x, y, w, h], np.float32) * 3
        roi = cv2.resize(rgb, (W // 2, H // 2))
        rx, ry, rw, rh = (raw / 2).astype(int)
        upper = cv2.cvtColor(roi[ry + rh // 5: ry + rh // 2 + rh // 10, rx: rx + rw], cv2.COLOR_RGB2GRAY)
        if upper.size:
            eyes = len(eye_cc.detectMultiScale(upper, 1.1, 5, minSize=(rw // 9, rw // 9)))
        face = raw if face is None else 0.8 * face + 0.2 * raw
    if face is None:
        face = np.array([W * 0.25, H * 0.12, W * 0.5, W * 0.5], np.float32)
    track.append({"f": n, "face": [round(float(v)) for v in face], "det": raw is not None, "eyes": int(eyes)})

    # --- relight subject ---
    k = key_light(face)
    subj = f
    subj = np.clip(subj * 1.06 + 0.015, 0, 1)                     # base exposure lift
    subj = warm(subj)                                              # cool daylight -> warm
    subj = np.clip(subj * (1 + 0.11 * k) * (1 - k * np.array([0, 0.008, 0.025], np.float32)), 0, 1)  # soft warm key
    lum = subj.mean(axis=2, keepdims=True)
    subj = np.clip(subj + (0.045 * (1 - lum) ** 2), 0, 1)          # shadow fill
    subj = s_curve(subj, 0.08).astype(np.float32)

    # --- composite with light wrap ---
    edge = np.clip(m * (1 - m) * 4, 0, 1)
    subj = subj * (1 - 0.35 * edge) + bg_soft * 0.35 * edge
    out = subj * m + bg * (1 - m)
    # gentle vignette for depth
    out = np.clip(out * vig, 0, 1)

    enc.stdin.write((out * 255 + 0.5).astype(np.uint8).tobytes())
    n += 1

enc.stdin.close()
enc.wait()
dec.wait()
json.dump(track, open(track_path, "w"))
print(f"{src}: {n} frames")
