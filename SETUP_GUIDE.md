# Oak & Iron Carpentry - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Image Setup

The website currently uses placeholder images. Replace them with actual photos for the best results.

### Required Images

#### Logo Files
- `/public/assets/logo/oak-iron-logo.svg` - Main logo (dark version)
- `/public/assets/logo/oak-iron-logo-light.svg` - Light version for dark backgrounds

#### Hero Section
- `/public/assets/hero/hero-workshop.jpg` - Desktop hero background (1920x1080px recommended)
- `/public/assets/hero/hero-workshop-mobile.jpg` - Mobile hero (1080x1920px)

#### Portfolio Projects
For each project, you'll need:
- Hero image: `/public/assets/portfolio/project-{id}-hero.jpg`
- Before image (optional): `/public/assets/portfolio/project-{id}-before.jpg`
- Gallery images (6-10 per project): `/public/assets/portfolio/project-{id}-gallery-{1-10}.jpg`

**Recommended dimensions**: 1200x900px (4:3 aspect ratio)

#### About Section
- `/public/assets/about/craftsman-portrait.jpg` - Portrait photo (900x1200px, 3:4 ratio)

#### Wood Swatches
- `/public/assets/materials/swatch-white-oak.jpg`
- `/public/assets/materials/swatch-walnut.jpg`
- `/public/assets/materials/swatch-maple.jpg`
- `/public/assets/materials/swatch-cherry.jpg`
- `/public/assets/materials/swatch-hickory.jpg`

**Recommended dimensions**: 800x800px (square)

#### Testimonial Avatars
- `/public/assets/testimonials/client-{id}-avatar.jpg` (400x400px)

#### Icons (Already Created as SVG)
- ✅ Process icons (discover, measure, build, install)
- ✅ Logo files

### Video (Optional)
- `/public/assets/video/workshop-loop.mp4` - 8-10 second workshop loop
- Recommended: 1920x1080px, H.264 codec, under 5MB

## 🎨 Customization

### Update Business Information

1. **Contact Details** - Update in multiple components:
   - Navigation component (`src/components/navigation/Navigation.tsx`)
   - Footer component (`src/components/footer/Footer.tsx`)
   - Contact form (`src/components/contact/ContactForm.tsx`)
   
   Replace:
   - Phone: `(555) 123-4567`
   - Email: `josh@oakiron.com`
   - Location: `Your City`

2. **Company Name & Tagline**
   - Update in `src/pages/_document.tsx` (meta tags)
   - Update in `src/pages/index.tsx` (SEO)
   - Update hero headline in `src/components/hero/Hero.tsx`

### Update Portfolio Projects

Edit `src/data/portfolio.ts`:

```typescript
{
  id: '1',
  title: 'Your Project Title',
  category: 'Kitchens', // or 'Built-ins', 'Stairwork', 'Furniture'
  heroImage: '/assets/portfolio/project-1-hero.jpg',
  beforeImage: '/assets/portfolio/project-1-before.jpg', // optional
  tags: ['White oak', 'Custom feature', 'Another feature'],
  galleryImages: [
    '/assets/portfolio/project-1-gallery-1.jpg',
    // ... add 6-10 images
  ],
  description: 'Brief project description'
}
```

### Update Testimonials

Edit `src/data/testimonials.ts`:

```typescript
{
  id: '1',
  clientName: 'Client Name',
  clientImage: '/assets/testimonials/client-1-avatar.jpg',
  rating: 5,
  projectType: 'Kitchen Remodel',
  quote: 'Your testimonial quote here...',
  neighborhood: 'Neighborhood Name',
  platform: 'Google' // or 'Houzz'
}
```

### Update FAQ

Edit `src/data/faq.ts` to add/modify questions and answers.

## 🎯 Color Customization

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  'oak': { /* warm wood tones */ },
  'iron': { /* neutral grays */ },
  'brass': { /* accent color */ }
}
```

You can customize these to match your brand colors.

## 📱 Testing Responsiveness

Test the website at these breakpoints:
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1024px, 1440px, 1920px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📧 Contact Form Setup

The contact form currently logs to console. To make it functional:

1. Create an API route in `/src/pages/api/contact.ts`
2. Integrate with email service (SendGrid, Mailgun, etc.)
3. Update form submission in `src/components/contact/ContactForm.tsx`

Example API route:
```typescript
// src/pages/api/contact.ts
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Send email using your preferred service
    // Return success/error response
  }
}
```

## 🔍 SEO Optimization

1. **Update Meta Tags** in `src/pages/_document.tsx`
2. **Add OpenGraph Images** - Create social share images
3. **Sitemap** - Generate sitemap.xml for search engines
4. **Analytics** - Add Google Analytics or similar

## ✅ Pre-Launch Checklist

- [ ] Replace all placeholder images with professional photos
- [ ] Update all contact information
- [ ] Add real portfolio projects
- [ ] Add actual client testimonials
- [ ] Update business name and location
- [ ] Set up contact form email delivery
- [ ] Test on multiple devices
- [ ] Check all links work
- [ ] Verify SEO meta tags
- [ ] Test form validation
- [ ] Check accessibility with screen reader
- [ ] Add Google Analytics
- [ ] Set up favicon
- [ ] Test in multiple browsers (Chrome, Safari, Firefox, Edge)

## 🆘 Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure images are in `/public/assets/` folder
- Verify image extensions match imports

### Styles Not Applied
- Clear `.next` cache: `rm -rf .next`
- Restart dev server: `npm run dev`

### Build Errors
- Run `npm run build` to check for TypeScript errors
- Fix any type errors before deploying

## 📞 Support

For questions or issues with the website code, check:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- TypeScript documentation: https://www.typescriptlang.org/docs

---

**Note**: This website is built with modern web technologies and best practices. Regular updates to dependencies are recommended for security and performance.

