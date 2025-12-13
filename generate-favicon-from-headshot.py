#!/usr/bin/env python3
"""
Generate favicons from the headshot image used on the landing page
"""
from PIL import Image
import os

# Source image from landing page
source_image = "public/images/moabdel-headshot-new.png"
output_dir = "public"

# Define favicon sizes needed
sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "favicon-48x48.png": (48, 48),
    "favicon-64x64.png": (64, 64),
    "favicon-128x128.png": (128, 128),
    "android-chrome-192x192.png": (192, 192),
    "android-chrome-512x512.png": (512, 512),
    "apple-touch-icon-180x180.png": (180, 180),
    "apple-touch-icon-192x192.png": (192, 192),
}

print(f"Loading source image: {source_image}")

# Load the source image
try:
    img = Image.open(source_image)
    print(f"Source image loaded successfully: {img.size}")

    # Convert to RGB if necessary (remove alpha channel for ICO)
    if img.mode in ('RGBA', 'LA', 'P'):
        # Create white background
        background = Image.new('RGB', img.size, (255, 255, 255))
        if img.mode == 'P':
            img = img.convert('RGBA')
        background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
        img = background

    # Generate each favicon size
    for filename, size in sizes.items():
        output_path = os.path.join(output_dir, filename)

        # Create a square crop centered on the image
        width, height = img.size
        min_dim = min(width, height)

        # Calculate crop box to center the image
        left = (width - min_dim) // 2
        top = (height - min_dim) // 2
        right = left + min_dim
        bottom = top + min_dim

        # Crop to square
        img_cropped = img.crop((left, top, right, bottom))

        # Resize with high-quality resampling
        img_resized = img_cropped.resize(size, Image.Resampling.LANCZOS)

        # Save the favicon
        img_resized.save(output_path, 'PNG', optimize=True)
        print(f"Created: {filename} ({size[0]}x{size[1]})")

    # Create favicon.ico with multiple sizes
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    ico_images = []

    for size in ico_sizes:
        width, height = img.size
        min_dim = min(width, height)
        left = (width - min_dim) // 2
        top = (height - min_dim) // 2
        right = left + min_dim
        bottom = top + min_dim

        img_cropped = img.crop((left, top, right, bottom))
        img_resized = img_cropped.resize(size, Image.Resampling.LANCZOS)
        ico_images.append(img_resized)

    # Save multi-size ICO
    ico_path = os.path.join(output_dir, "favicon.ico")
    ico_images[0].save(ico_path, format='ICO', sizes=ico_sizes)
    print(f"Created: favicon.ico (multi-size)")

    print("\n✅ All favicons generated successfully from moabdel-headshot-new.png!")
    print("Your favicon now matches your landing page photo.")

except FileNotFoundError:
    print(f"Error: Could not find {source_image}")
except Exception as e:
    print(f"Error: {e}")
