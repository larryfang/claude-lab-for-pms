#!/bin/bash
# Claude Lab — local preview launcher (macOS: double-click this file)
cd "$(dirname "$0")" || exit 1

PORT=8080
URL="http://localhost:${PORT}"

echo "✦ Starting Claude Lab at ${URL}"
echo "   (Press Ctrl+C in this window to stop the server.)"

# Open the browser shortly after the server starts
( sleep 1; command -v open >/dev/null && open "${URL}" ) &

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "${PORT}"
elif command -v python >/dev/null 2>&1; then
  python -m SimpleHTTPServer "${PORT}"
else
  echo "Python not found. Install Python, or run:  npx serve ."
  read -r -p "Press Enter to close."
fi
