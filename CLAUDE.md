# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
npm run start    # Start production server
```

No test suite is configured in this project.

## Architecture

**Centauryy Library** is a Next.js 15 (App Router) personal knowledge hub that displays Medium blog articles fetched via RSS.

### Responsive layout strategy

`src/app/page.tsx` uses the `useIsMobile` hook to dynamically render either `pageDesktop.tsx` or `pageMobile.tsx`. This is intentional — the two layouts are separate components optimized for each viewport, not a single responsive layout. Both are lazy-loaded via `next/dynamic`.

The `useIsMobile` hook (`src/hooks/useIsMobile.ts`) starts as `undefined` during SSR and resolves client-side after hydration to avoid mismatches. It defaults to `false` (desktop) on initial render.

### Data flow

1. `/api/medium` route (`src/app/api/medium/route.ts`) fetches and parses the Medium RSS feed at `https://medium.com/feed/@centauryy` using `rss-parser`, strips HTML from content, extracts excerpts, and returns `{ items: MediumFeedItem[] }`.
2. `useMediumPosts` hook (`src/hooks/useMediumPosts.ts`) fetches `/api/medium` client-side and manages loading/error state.
3. `SearchModal` uses Fuse.js against the loaded posts for fuzzy client-side search (threshold: 0.3, title weight 0.7, excerpt weight 0.3).

### Design system

Strict neobrutalist aesthetic — all custom tokens are defined in `src/app/globals.css` and `tailwind.config.js`:

- **Colors**: `cream` (#FCEEE3) background, `brutal-yellow` (#facc15) accent, pure black borders
- **Shadows**: hard-edged no-blur (`brutal-sm`, `brutal`, `brutal-lg` → 3/4/6px offset)
- **Hover pattern**: `transform: translate(3px, 3px)` + shadow collapses to `0px 0px`
- **CSS utility classes**: `.brutal-card`, `.brutal-button`, `.brutal-input` in globals.css

Always follow this design language when adding UI. Do not introduce rounded corners, blurred shadows, or soft gradients.

### Key types

All shared types are in `src/types/index.ts`: `MediumPost`, `UseMediumPostsReturn`, `SearchModalProps`, `CarouselCard`.

### Image domains

`next.config.ts` allows remote images from `i.pinimg.com`, `medium.com`, `cdn-images-1.medium.com`, and `miro.medium.com`. Add new domains here if needed.
