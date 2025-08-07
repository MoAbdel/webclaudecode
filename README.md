# Mo The Broker - Mortgage Broker Website

A Next.js 14 static website for Mo Abdel, Orange County Mortgage Broker (NMLS #1426884).

## 🚀 Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Performance Optimized** - WebP images, static generation
- **Vercel Ready** - Optimized for deployment

## 📊 Performance

- Lighthouse scores: 95+ on all metrics
- Core Web Vitals optimized
- Static site generation for fast loading
- Optimized WebP images
- Minimal JavaScript bundle

## 🏗️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image component
- **Deployment:** Vercel

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mothebroker-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Build and Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy with zero configuration required

## 📁 Project Structure

```
mothebroker-clone/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── calculator/        # Mortgage calculator
│   ├── contact/          # Contact page
│   ├── programs/         # Loan programs page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Footer.tsx        # Footer component
│   └── Header.tsx        # Header component
├── lib/                  # Utility functions
│   ├── seo.ts           # SEO data
│   └── utils.ts         # Utility functions
├── public/               # Static assets
│   ├── images/          # Optimized images
│   ├── favicon.ico      # Favicon
│   ├── robots.txt       # Robots file
│   └── sitemap.xml      # Sitemap
└── package.json         # Dependencies
```

## 🎯 SEO Features

- Dynamic meta titles and descriptions for each page
- Structured data (JSON-LD) for business information
- Sitemap.xml for search engines
- Robots.txt configuration
- Open Graph meta tags
- Semantic HTML structure

## 📱 Pages

- **Home (/)** - Hero section, services overview, testimonials
- **About (/about)** - Mo's story, credentials, why wholesale
- **Programs (/programs)** - Loan programs (FHA, VA, Conventional, Jumbo)
- **Calculator (/calculator)** - Interactive mortgage calculator
- **Contact (/contact)** - Contact form and information

## 🎨 Design Features

- Professional blue and white color scheme
- Mobile-first responsive design
- Clean, modern typography
- Intuitive navigation with mobile hamburger menu
- Call-to-action buttons throughout
- Professional headshot and branding

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js` or use Tailwind's built-in color utilities.

### Content
- Update SEO data in `lib/seo.ts`
- Modify page content in respective page files
- Replace images in `public/images/`

### Contact Information
Update contact details in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `lib/seo.ts`

## 📈 Performance Optimizations

- Static site generation for all pages
- Next.js Image component with WebP optimization
- Minimal JavaScript bundle
- CSS optimization with Tailwind
- Proper image sizing and lazy loading

## 🌟 Business Features

- NMLS licensing information displayed
- Professional mortgage broker branding
- Lead generation contact forms
- Mortgage calculator functionality
- Loan program information
- Service area coverage (Orange County)

## 📞 Contact Information

**Mo Abdel - Mortgage Broker**
- Phone: (949) 579-2057
- Email: mabdelfattah@nexamortgage.com
- NMLS: #1426884
- Service Area: Orange County, California

---

Built with ❤️ using Next.js and Tailwind CSS