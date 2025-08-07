# 📸 Image Replacement Guide

## Header Logo Image Replacement

The header logo is currently set up to display a circular photo with enhanced styling. 

### To Replace with Your Couple Photo:

1. **Save your couple photo** as: `public/images/mo-couple-photo.jpg`

2. **Update the image path** in `components/Header.tsx` line 56:
   ```jsx
   // Change from:
   src="/images/mo-headshot.webp"
   
   // To:
   src="/images/mo-couple-photo.jpg"
   ```

### Current Styling Applied:
- ✅ **Circular crop** with `rounded-full`
- ✅ **Double zoom** with `scale-150`
- ✅ **Professional styling**: shadows, ring border, hover effects
- ✅ **Responsive sizing**: 80px mobile, 96px desktop
- ✅ **Smart positioning**: focused on center-top area

### Image Requirements:
- **Format**: JPG or PNG recommended
- **Recommended size**: 400x400px or larger (will be cropped to circle)
- **Quality**: High resolution for crisp display on retina screens

Once you replace the image file and update the path, the beautiful couple photo will display as your header logo with all the enhanced styling!