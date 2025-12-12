# Auronex Next.js - Futurist Swiss-Tech

A modern Next.js implementation of the Auronex website with Futurist Swiss-Tech aesthetic.

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
auronex-nextjs/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── products/          # Products page
│   ├── contact/           # Contact page
│   └── about/             # About page
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── ui/               # Reusable UI components
│   └── [page-specific]/  # Page-specific components
├── public/               # Static assets
└── lib/                  # Utility functions
```

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS with custom Swiss-Tech theme
- ✅ Optimized Google Fonts (Inter, JetBrains Mono)
- ✅ GSAP animations
- ✅ Responsive design (mobile-first)
- ✅ Glassmorphism effects (optimized for mobile)
- ✅ SEO-friendly with metadata
- ✅ Image optimization with Next.js Image

## Design System

### Colors
- **Gunmetal**: `#0A0A0A` (background)
- **Electric Blue**: `#3B82F6` (primary accent)
- **Neon Silver**: `#E5E7EB` (text)

### Typography
- **Headings**: Inter (sans-serif) with tight tracking
- **Data/Labels**: JetBrains Mono (monospace)

### Key Components
- Glassmorphism cards with mobile optimization
- Bento Grid layout (responsive)
- Terminal-style forms
- 3D-tilted product blueprints
- Spotlight effects on hover

## Development

Open [http://localhost:3000](http://localhost:3000) to view the site.

The page auto-updates as you edit files.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Output: `.next` folder

## License

© 2025 Auronex Solutions. All Rights Reserved.
