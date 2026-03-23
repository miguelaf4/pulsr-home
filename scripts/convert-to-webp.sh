#!/bin/bash
# Convert all MP4s in public/assets to animated WebP (except pulsr-teaser*)

ASSETS_DIR="$(dirname "$0")/../public/assets"

for file in "$ASSETS_DIR"/*.mp4; do
  filename=$(basename "$file" .mp4)

  # Skip pulsr-teaser files
  if [[ "$filename" == pulsr-teaser* ]]; then
    echo "⏭  Skipping: $filename.mp4"
    continue
  fi

  output="$ASSETS_DIR/$filename.webp"
  echo "🔄 Converting: $filename.mp4 → $filename.webp"

  ffmpeg -y -i "$file" \
    -vcodec libwebp \
    -filter:v "fps=fps=24,scale='min(720,iw)':-2" \
    -lossless 0 \
    -compression_level 4 \
    -q:v 65 \
    -loop 0 \
    -an \
    "$output"

  # Show size comparison
  orig_size=$(du -h "$file" | cut -f1)
  new_size=$(du -h "$output" | cut -f1)
  echo "   ✅ Done: $orig_size → $new_size"
  echo ""
done

echo "🎉 All conversions complete."
