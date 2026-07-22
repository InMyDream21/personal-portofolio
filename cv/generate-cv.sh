#!/usr/bin/env bash
# Render cv/cv.html -> public/ahmed-nizhan-haikal-cv.pdf (served by the Download CV button).
# Edit cv.html, then run: ./cv/generate-cv.sh
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$DIR/cv.html"
OUT="$DIR/../public/ahmed-nizhan-haikal-cv.pdf"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || CHROME="$(command -v google-chrome || command -v chromium || true)"
[ -n "$CHROME" ] && [ -x "$CHROME" ] || { echo "Chrome not found"; exit 1; }
[ -f "$SRC" ] || { echo "Missing $SRC"; exit 1; }

# ponytail: warn on long dashes instead of failing — user wants none in the CV.
if grep -q $'—\|–' "$SRC"; then echo "warn: long dash (em/en) found in cv.html"; fi

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "file://$SRC" 2>/dev/null

echo "Generated $OUT"
