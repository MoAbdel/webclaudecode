from PIL import Image, ImageDraw, ImageFont
import os

# Create a simple favicon with "MA" initials
size = 64
img = Image.new('RGB', (size, size), color='#1e40af')  # Blue background
draw = ImageDraw.Draw(img)

# Try to use a font, fallback to default if not available
try:
    font = ImageFont.truetype("arial.ttf", 28)
except:
    font = ImageFont.load_default()

# Draw white "MA" text
text = "MA"
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]
x = (size - text_width) // 2
y = (size - text_height) // 2 - 4  # Slight adjustment
draw.text((x, y), text, fill="white", font=font)

# Save as ICO and PNG
img.save('favicon.ico', format='ICO', sizes=[(16,16), (32,32), (64,64)])
img.save('favicon.png', format='PNG')

print("Created favicon.ico and favicon.png with 'MA' initials")
print("This will be much more visible in Google search results than a detailed photo")