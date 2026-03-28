# Centauryy Library

A modern, brutalist-styled web application for articles and resources. Built with Next.js 15, React 19, and Tailwind CSS with DaisyUI.

![Design Style: Neobrutalism](https://img.shields.io/badge/Design-Neobrutalism-facc15)
![Next.js 15](https://img.shields.io/badge/Next.js-15.3.2-black)
![React 19](https://img.shields.io/badge/React-19-blue)

## 🚀 Features

- **Neobrutalist Design** - Bold, high-contrast design with thick borders and hard shadows
- **Responsive Layout** - Separate optimized views for desktop and mobile
- **Medium RSS Integration** - Automatically fetches articles from Medium
- **Fuzzy Search** - Fast article search using Fuse.js
- **Smooth Animations** - Framer Motion powered animations
- **Skeleton Loading** - Professional loading states for better UX
- **SEO Optimized** - Comprehensive meta tags and Open Graph support

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   └── medium/        # Medium RSS feed endpoint
│   ├── globals.css        # Global styles & design system
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page (responsive router)
│   ├── pageDesktop.tsx    # Desktop-specific layout
│   └── pageMobile.tsx     # Mobile-specific layout
├── components/            # React Components
│   ├── features/          # Feature components
│   │   ├── ArticleCard.tsx
│   │   ├── Carousel.tsx
│   │   └── SearchModal.tsx
│   ├── ui/                # UI primitives
│   │   ├── Animations.tsx
│   │   ├── Button.tsx
│   │   └── Skeleton.tsx
│   └── layout/            # Layout components
├── hooks/                 # Custom React hooks
│   ├── useIsMobile.ts     # Responsive detection (SSR-safe)
│   └── useMediumPosts.ts  # Medium posts fetcher
├── lib/                   # Utilities
│   └── utils.ts           # Helper functions
└── types/                 # TypeScript definitions
    └── index.ts
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router + Turbopack) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 + DaisyUI 5 |
| Animations | Framer Motion |
| Search | Fuse.js |
| Data Fetching | SWR |
| Icons | Lucide React |
| Language | TypeScript 5 |

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project
cd centauryy-perpus

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `cream` | `#FCEEE3` | Background |
| `brutal-yellow` | `#facc15` | Accent/CTA |
| `brutal-black` | `#000000` | Borders/Text |

### Shadows
```css
--shadow-brutal: 4px 4px 0px 0px black;
--shadow-brutal-sm: 3px 3px 0px 0px black;
--shadow-brutal-lg: 6px 6px 0px 0px black;
```

### Components

All components follow the brutalist design principles:
- **Thick borders** (2px+ black)
- **Hard shadows** (no blur)
- **High contrast** colors
- **Interactive hover states** with translate effect

## 📝 API Endpoints

### GET /api/medium
Fetches and parses RSS feed from Medium.

**Response:**
```json
{
  "items": [
    {
      "title": "Article Title",
      "link": "https://medium.com/...",
      "date": "2025-01-01T00:00:00.000Z",
      "categories": ["technology", "design"],
      "excerpt": "Article excerpt...",
      "image": "https://..."
    }
  ]
}
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root:
```env
# Add your environment variables here
```

### Next.js Config
The `next.config.ts` includes:
- Remote image patterns for Medium and Pinterest
- Package import optimizations
- Production console removal

## 📱 Responsive Design

The app uses a custom `useIsMobile` hook for SSR-safe responsive detection:
- **Desktop**: Full layout with carousel previews
- **Mobile**: Simplified, touch-friendly interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private. All rights reserved.

---

Built with ❤️ by Centauryy
