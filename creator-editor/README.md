# Creator Editor: auto-edit engine for talking-head reels

Turns raw phone clips into a finished 9:16 reel. It is the "edits their video"
step of the creator app.

What it does to every reel:

| Step | How |
|---|---|
| Background swap to a minimal study | MediaPipe selfie segmentation + guided-filter edges + light wrap over a plate rendered in Chromium (`backgrounds/study.html`) |
| Face relight | Warm key from camera-left that tracks the face, shadow fill, gentle contrast |
| Dead-air removal | FFmpeg `silencedetect`, with small padding so words aren't clipped |
| "Multi-camera" feel | 4 virtual angles (wide / medium / close / offset) framed on the tracked face, cut at every pause and about every 3s, never the same angle twice in a row |
| Looking-down detection | Haar face + eye tracking per frame. 0.4s+ without visible eyes is flagged as a b-roll slot |
| Hook slot | First 0.2s reserved for b-roll |
| Audio | High-pass, compression, loudness normalized to -14 LUFS (IG/TT/YT target) |

Output: `reel.mp4` (1080x1920, H.264/AAC, faststart) plus `reel_cut_sheet.json`
(for the app UI to show where to drop b-roll) and `reel_cut_sheet.md`.

## Setup (once)

Needs python3, ffmpeg, node/npm.

```bash
cd creator-editor
./setup.sh        # pip deps, segmentation model (from npm), renders background plate
```

## Run

```bash
python3 -I editor/edit_reel.py --out out/reel.mp4 clip1.mov clip2.mov clip3.mov
```

Clips are edited in the order given. Speed is about 0.5s per frame per CPU core
(a 60s reel takes about 4-6 min on 4 cores). It is CPU-only and has no paid APIs.

Custom background: edit `backgrounds/study.html` (or pass any 1080x1920 image with `--bg`).

## Files

- `editor/process_clip.py`: per clip. Background swap, relight, writes graded master + `<clip>.json` face/eye track
- `editor/assemble.py`: cuts, angles, look-away flags, audio, final render, cut sheet
- `editor/edit_reel.py`: runs both (clips in parallel)
- `backgrounds/study.html` + `render_bg.js`: the minimal-study plate

## Known limits / next steps for the app

- **Captions**: not included. Add speech-to-text (Whisper/Parakeet locally, or a hosted API)
  and burn in word-by-word captions. The transcript also enables cutting on sentences instead of pauses.
- **Virtual angles are crops**. Ask creators to film in 4K so close-ups stay sharp.
- **Hair edges**: the 256px segmentation model can clip curls and flyaways. A higher-res
  matting model (e.g. RobustVideoMatting) would improve it.
- **Gaze detection is approximate**: blinks and hands over the face can trigger it. MediaPipe
  Face Landmarker with iris landmarks would be more accurate.
- **Run it as a background job** (queue + worker), not inside a web request. Show progress from the frame count.
