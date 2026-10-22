#!/usr/bin/env bash
# One-time setup: Python deps, segmentation model, rendered background plate.
# Needs: python3, ffmpeg, node + npm (Playwright with Chromium for the background).
set -euo pipefail
cd "$(dirname "$0")"
pip install -q -r requirements.txt

# MediaPipe selfie-segmentation model ships inside its npm package
mkdir -p models && tmp=$(mktemp -d)
(cd "$tmp" && npm pack --silent @mediapipe/selfie_segmentation@0.1.1675465747 >/dev/null && tar xzf ./*.tgz)
cp "$tmp/package/selfie_segmentation.tflite" models/
rm -rf "$tmp"

# Render the minimal-study background in Chromium, then soft-focus it
npm install --silent --no-package-lock   # local playwright, see package.json
node backgrounds/render_bg.js "$PWD/backgrounds/study.html" backgrounds/study_sharp.png
ffmpeg -v error -y -i backgrounds/study_sharp.png -vf "gblur=sigma=22,eq=saturation=0.95" backgrounds/study_bg.png
echo "setup done"
