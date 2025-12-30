#!/bin/bash
File_png="${1?:Usage: $0 file.png}"
File="${File_png%.*}"
convert "$File_png" "$File.pnm"
potrace "$File.pnm" -s -o "$File.svg"
rm "$File.pnm"
echo "Converted $File_png to $File.svg"
exit 0
# End of script
# This script converts a PNG image to an SVG vector graphic using ImageMagick and Potrace.
# Usage: ./script.sh image.png
# Make sure you have ImageMagick and Potrace installed on your system.
# Install ImageMagick: https://imagemagick.org/script/download.php
# Install Potrace: http://potrace.sourceforge.net/#downloading
# The script first converts the PNG to a PNM format using ImageMagick's convert command,
# then uses Potrace to convert the PNM to SVG format.
# Finally, it cleans up the intermediate PNM file.
# Note: Ensure that the input PNG file exists and is accessible.
# Example: ./convert_png_to_svg.sh example.png
# Exit codes:
# 0 - Success
# 1 - Missing input file argument
# 2 - Input file does not exist
if [ ! -f "$File_png" ]; then
  echo "Error: File '$File_png' not found!"
  exit 2
fi
