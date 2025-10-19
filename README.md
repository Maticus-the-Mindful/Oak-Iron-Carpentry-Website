# Oak & Iron Carpentry Website

A beautiful, modern website for Oak & Iron Carpentry featuring custom cabinetry and fine woodwork.

## 🎨 Features

- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Interactive Portfolio**: Filterable gallery with before/after slider and lightbox
- **Smooth Animations**: Scroll-triggered animations and parallax effects
- **Contact Form**: Fully functional form with validation and state management
- **Modern Stack**: Built with Next.js, TypeScript, and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── public/
│   └── assets/          # Images, icons, logos, and media files
├── src/
│   ├── components/      # React components organized by feature
│   │   ├── about/
│   │   ├── common/
│   │   ├── contact/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── navigation/
│   │   ├── portfolio/
│   │   ├── process/
│   │   └── testimonials/
│   ├── data/           # Data files for portfolio, testimonials, FAQ
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Next.js pages
│   ├── styles/         # Global styles and Tailwind CSS
│   └── utils/          # Utility functions
```

## 🎯 Key Components

### Navigation
- Fixed header with scroll behavior
- Transparent overlay on hero, solid background on scroll
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Hero Section
- Full viewport height with parallax background
- Animated content with staggered fade-up effects
- Trust badges and dual CTAs

### Portfolio Gallery
- 3-column masonry grid (responsive)
- Category filtering
- Before/after slider on hover
- Lightbox gallery with keyboard navigation

### Testimonials
- Desktop: 3-card carousel
- Mobile: Horizontal scroll with snap
- Google and Houzz review integration

### About Section
- Two-column layout with portrait
- Stats display
- Preferred woods showcase
- Tool icons with tooltips

### Process Timeline
- Horizontal timeline (desktop)
- Vertical timeline (mobile)
- Animated progress line
- Four-step process with icons

### Contact Form
- Field validation
- Loading, success, and error states
- Responsive layout with contact info cards

### Additional Features
- Wood swatches with expandable care notes
- Video section placeholder
- FAQ accordion
- Newsletter signup
- Comprehensive footer

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js`:
- Oak: Warm wood tones
- Iron: Neutral grays
- Brass: Accent color

### Content
Update content in the data files:
- `src/data/portfolio.ts` - Portfolio projects
- `src/data/testimonials.ts` - Client reviews
- `src/data/faq.ts` - FAQ items and process steps

### Images
Replace placeholder images in `/public/assets/` with actual photos:
- `/logo/` - Logo files
- `/hero/` - Hero background images
- `/portfolio/` - Project photos
- `/about/` - Craftsman portrait
- `/materials/` - Wood swatches
- `/icons/` - Process and tool icons

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly

## 🔧 Build & Deploy

### Build for production:
```bash
npm run build
# or
yarn build
```

### Start production server:
```bash
npm start
# or
yarn start
```

## 📄 License

© 2024 Oak & Iron Carpentry. All rights reserved.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

