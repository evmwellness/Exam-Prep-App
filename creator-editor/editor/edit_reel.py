"""One-command reel editor.

usage: python3 -I editor/edit_reel.py --out reel.mp4 [--bg backgrounds/study_bg.png] CLIP1.mov [CLIP2.mov ...]

Clips are edited in the order given. Runs process_clip.py on each clip in
parallel (background swap, relight, face/eye tracking), then assemble.py
(dead-air trim, virtual camera angles, look-away flags, audio loudness).
"""
import argparse
import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

ap = argparse.ArgumentParser()
ap.add_argument("clips", nargs="+")
ap.add_argument("--out", required=True)
ap.add_argument("--bg", default=f"{ROOT}/backgrounds/study_bg.png")
ap.add_argument("--model", default=f"{ROOT}/models/selfie_segmentation.tflite")
ap.add_argument("--work", default=None, help="scratch dir (default: <out>_work)")
ap.add_argument("--jobs", type=int, default=os.cpu_count() or 2)
a = ap.parse_args()

work = a.work or os.path.splitext(a.out)[0] + "_work"
os.makedirs(work, exist_ok=True)
for p in (a.bg, a.model):
    if not os.path.exists(p):
        sys.exit(f"missing {p}: run ./setup.sh first")


def grade(clip):
    n = os.path.splitext(os.path.basename(clip))[0]
    r = subprocess.run([sys.executable, "-I", f"{HERE}/process_clip.py", clip, a.bg, a.model,
                        f"{work}/{n}.mp4", f"{work}/{n}.json"], capture_output=True, text=True)
    if r.returncode:
        raise RuntimeError(f"{clip}: {r.stderr[-2000:]}")
    print(r.stdout.strip(), flush=True)


with ThreadPoolExecutor(a.jobs) as ex:
    list(ex.map(grade, a.clips))
subprocess.run([sys.executable, "-I", f"{HERE}/assemble.py", work, a.out, *a.clips], check=True)
