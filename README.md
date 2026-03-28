<h1 align="center">📚 Centauryy Library</h1>

<p align="center">
  <b>A personal knowledge hub for curated tech articles and research notes</b><br/>
  <sub>Neobrutalist design · Medium RSS integration · Fuzzy search · Responsive</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Design-Neobrutalism-facc15?style=for-the-badge" alt="Neobrutalism"/>
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
</p>

<p align="center">
  <a href="https://mini-library-centauryy.vercel.app"><b>🔗 Live Site</b></a> · <a href="https://medium.com/@centauryy"><b>✍️ Medium Blog</b></a>
</p>

<!--
🖼️ SCREENSHOT — Uncomment after adding

<p align="center">
  <img src="docs/screenshots/home.png" width="70%" alt="Homepage" />
</p>
-->

---

## About

This is my personal digital library — a place to organize articles, research notes, and ideas about technology topics I'm actively exploring: data center infrastructure, AI/ML, cloud architecture, and modern web development.

Articles are written and published on [Medium](https://medium.com/@centauryy), then automatically pulled into this site via RSS feed integration.

## Features

| Feature | How It Works |
|---------|-------------|
| **Medium RSS Integration** | API route fetches and parses the Medium RSS feed, keeping content in sync automatically |
| **Fuzzy Search** | Fuse.js-powered search across titles, excerpts, and categories — typo-tolerant |
| **Neobrutalist UI** | Intentional design system: thick borders, hard shadows, high-contrast colors, hover translate effects |
| **Responsive Views** | SSR-safe `useIsMobile` hook serves separate optimized layouts for desktop and mobile |
| **Smooth Animations** | Framer Motion page transitions and scroll-triggered reveals |
| **Skeleton Loading** | Content-aware loading states that match the final layout |
| **SEO Optimized** | Full meta tags, Open Graph, and structured layout metadata |

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router + Turbopack) |
| UI | React 19 |
| Styling | Tailwind CSS 4 + DaisyUI 5 |
| Animations | Framer Motion |
| Search | Fuse.js |
| Data Fetching | SWR |
| Icons | Lucide React |
| Language | TypeScript 5 |
| Deployment | Vercel |

## Design System

The UI follows a strict neobrutalist aesthetic:

```
Colors                          Shadows
─────────────────               ─────────────────────────────
cream:    #FCEEE3  (bg)         sm:  3px 3px 0px 0px black
yellow:   #facc15  (accent)     md:  4px 4px 0px 0px black
black:    #000000  (border)     lg:  6px 6px 0px 0px black

Rules
─────────────────────────────────────────────────────────────
• Borders: 2px+ solid black on all interactive elements
• Shadows: Hard-edged, no blur, no spread
• Hover: translateX(-2px) translateY(-2px) + shadow grow
• Typography: Bold, high-contrast, no subtlety
```

## API

### `GET /api/medium`

Fetches and parses articles from the configured Medium RSS feed.

```json
{
  "items": [
    {
      "title": "Article Title",
      "link": "https://medium.com/...",
      "date": "2025-01-01T00:00:00.000Z",
      "categories": ["technology", "infrastructure"],
      "excerpt": "Article excerpt...",
      "image": "https://..."
    }
  ]
}
```

## Getting Started

```bash
git clone https://github.com/Centauryyy25/Mini-Perpus-Centauryy.git
cd Mini-Perpus-Centauryy
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── api/medium/        # Medium RSS feed endpoint
│   ├── globals.css        # Design system tokens
│   ├── layout.tsx         # Root layout + metadata
│   ├── page.tsx           # Responsive page router
│   ├── pageDesktop.tsx    # Desktop layout
│   └── pageMobile.tsx     # Mobile layout
├── components/
│   ├── features/          # ArticleCard, Carousel, SearchModal
│   ├── ui/                # Button, Skeleton, Animations
│   └── layout/            # Navigation, Footer
├── hooks/
│   ├── useIsMobile.ts     # SSR-safe responsive detection
│   └── useMediumPosts.ts  # SWR-based article fetcher
├── lib/                   # Utilities
└── types/                 # TypeScript definitions
```

## Topics I Write About

- Data Center & Cloud Infrastructure
- AI/ML Systems & NVIDIA Ecosystem
- ARM Architecture & CXL Memory
- Modern Web Technologies
- Hardware Innovation

## Contributing

```bash
git checkout -b feature/your-feature
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

Open a Pull Request with a clear description.

## License

All rights reserved.

---

<p align="center">
  Built by <a href="https://www.linkedin.com/in/ilham-ahsan-saputra/"><b>Ilham Ahsan Saputra</b></a><br/>
  <sub>Computer Science Student · Junior Network Engineer · <a href="https://medium.com/@centauryy">Tech Writer</a></sub>
</p>
