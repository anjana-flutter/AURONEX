# Auronex Next.js - Setup Guide

## Quick Start

Since Node.js/npm is not currently installed on your system, you'll need to install it first:

### 1. Install Node.js

Download and install Node.js from: https://nodejs.org/

Choose the LTS (Long Term Support) version.

### 2. Install Dependencies

Once Node.js is installed, open a terminal in the `auronex-nextjs` folder and run:

```bash
npm install
```

This will install all required dependencies including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- GSAP

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
auronex-nextjs/
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── services/page.tsx       # Services page
│   ├── products/page.tsx       # Products page
│   ├── contact/page.tsx        # Contact page
│   └── about/page.tsx          # About page
├── components/
│   └── layout/
│       ├── Header.tsx          # Navigation header
│       └── Footer.tsx          # Footer
├── public/
│   └── logo.png                # Auronex logo
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## Features Implemented

✅ **All 5 Pages**: Home, Services, Products, Contact, About  
✅ **Futurist Swiss-Tech Design**: Electric Blue accents, glassmorphism, grid layouts  
✅ **Typography**: Inter for headings, JetBrains Mono for data  
✅ **Responsive**: Mobile-first design with optimized glassmorphism  
✅ **Animations**: GSAP with fast snap-in effects  
✅ **SEO**: Metadata for each page  
✅ **Performance**: Next.js Image optimization, font optimization  

## Key Components

### Header
- Sticky glass header with navigation
- Mobile hamburger menu
- Shimmer CTA button

### Pages
- **Home**: 3D gradient orb, terminal stats, Bento Grid preview
- **Services**: Bento Grid layout with spotlight effects
- **Products**: Blueprint split-view with 3D tilt
- **Contact**: Terminal-style form
- **About**: Mission, vision, core values

### Styling
- Glassmorphism with mobile optimization (reduced blur)
- 1px borders on all elements
- Fast snap animations (0.3-0.5s)
- Grid background patterns

## Next Steps

1. Install Node.js if not already installed
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start development server
4. Customize content as needed
5. Deploy to Vercel or your preferred platform

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy (zero configuration needed)

### Manual Deployment

```bash
npm run build
# Upload .next folder to your server
npm start
```

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## Support

For issues or questions, refer to:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- GSAP: https://greensock.com/docs/

---

© 2025 Auronex Solutions
