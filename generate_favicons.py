#!/usr/bin/env python3
"""
Generate optimized favicons for MoTheBroker.com
Creates multiple sizes for better SERP and browser compatibility
"""

import os
from PIL import Image, ImageDraw, ImageFont

def create_favicon_image(size):
    """Create a favicon image with the specified size"""
    # Create image with blue background
    img = Image.new('RGBA', (size, size), (30, 64, 175, 255))  # #1e40af
    draw = ImageDraw.Draw(img)
    
    # Add rounded corners
    if size >= 32:
        corner_radius = max(2, size // 8)
        mask = Image.new('L', (size, size), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle([0, 0, size, size], corner_radius, fill=255)
        img.putalpha(mask)
    
    # Try to load a font, fallback to default if not available
    try:
        if size >= 32:
            font_size = max(12, size // 2)
        else:
            font_size = max(8, size // 2)
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        try:
            font = ImageFont.load_default()
        except:
            font = None
    
    # Draw "M" in the center
    text = "M"
    if font:
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
    else:
        text_width = size // 3
        text_height = size // 3
    
    text_x = (size - text_width) // 2
    text_y = (size - text_height) // 2
    
    draw.text((text_x, text_y), text, fill=(255, 255, 255, 255), font=font)
    
    # Add small house icon for larger sizes
    if size >= 32:
        house_size = size // 4
        house_x = size - house_size - 2
        house_y = 2
        
        # Simple house outline
        points = [
            (house_x + house_size//2, house_y),  # roof peak
            (house_x, house_y + house_size//3),   # left roof
            (house_x, house_y + house_size),      # bottom left
            (house_x + house_size, house_y + house_size),  # bottom right
            (house_x + house_size, house_y + house_size//3),  # right roof
        ]
        draw.polygon(points, outline=(255, 255, 255, 200), width=1)
        
        # Door
        door_width = house_size // 4
        door_height = house_size // 3
        door_x = house_x + (house_size - door_width) // 2
        door_y = house_y + house_size - door_height
        draw.rectangle([door_x, door_y, door_x + door_width, door_y + door_height], 
                      fill=(255, 255, 255, 200))
    
    return img

def main():
    """Generate all required favicon sizes"""
    # Standard favicon sizes
    sizes = [16, 32, 48, 64, 128, 192, 512]
    
    print("Generating optimized favicons for MoTheBroker.com...")
    
    # Create ICO file with multiple sizes
    ico_images = []
    for size in [16, 32, 48]:
        img = create_favicon_image(size)
        ico_images.append(img)
    
    # Save as ICO
    ico_images[0].save('favicon.ico', format='ICO', sizes=[(img.width, img.height) for img in ico_images])
    print("✓ Created favicon.ico")
    
    # Create individual PNG files
    for size in sizes:
        img = create_favicon_image(size)
        filename = f'favicon-{size}x{size}.png'
        img.save(filename, format='PNG')
        print(f"✓ Created {filename}")
    
    # Create Apple touch icons
    for size in [180, 192]:
        img = create_favicon_image(size)
        filename = f'apple-touch-icon-{size}x{size}.png'
        img.save(filename, format='PNG')
        print(f"✓ Created {filename}")
    
    # Create Android chrome icons
    for size in [192, 512]:
        img = create_favicon_image(size)
        filename = f'android-chrome-{size}x{size}.png'
        img.save(filename, format='PNG')
        print(f"✓ Created {filename}")
    
    print("\n🎉 All favicons generated successfully!")
    print("\nFiles created:")
    print("- favicon.ico (16x16, 32x32, 48x48)")
    print("- favicon-*.png (multiple sizes)")
    print("- apple-touch-icon-*.png")
    print("- android-chrome-*.png")

if __name__ == "__main__":
    main()