#!/bin/sh
# Renders public/og-image.png and public/apple-touch-icon.png from the HTML
# sources in this folder using headless Chrome (macOS path; set CHROME to override).
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
render() {
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size="$2" --virtual-time-budget=3000 --allow-file-access-from-files \
    --screenshot="$PWD/public/$3" "file://$PWD/scripts/$1" >/dev/null 2>&1
  echo "wrote public/$3"
}
render og-image.html 1200,630 og-image.png
render touch-icon.html 180,180 apple-touch-icon.png
