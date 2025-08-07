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
- ✅ **Professional styling**: optimized shadows, ring border, hover effects
- ✅ **Optimized sizing**: 56px mobile, 64px desktop (reduced by 1/3)
- ✅ **Smart positioning**: focused on center-top area
- ✅ **Performance optimized**: 85% quality, efficient loading

### Image Requirements:
- **Format**: WebP recommended for best compression, JPG/PNG also supported
- **Recommended size**: 200x200px to 400x400px (will be cropped to circle)
- **Quality**: 85% compression for optimal balance of size and clarity

Once you replace the image file and update the path, the beautiful couple photo will display as your header logo with all the enhanced styling!