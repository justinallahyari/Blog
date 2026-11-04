# Modern Lightweight Static Blog (Next.js + Tailwind CSS)

A fast, accessible, statically exported blog built with **Next.js (App Router)**, **Tailwind CSS** (`@tailwindcss/typography`), **Zod** frontmatter validation, and **Lucide Icons**.

## Features

- **100% Static Export (`output: 'export'`)**: Pre-renders all routes, blog posts, `rss.xml`, `sitemap.xml`, and `404.html` into the `out/` directory.
- **Strict Content Schema**: Validates Markdown frontmatter (`title`, `description`, `pubDate`, `updatedDate`, `heroImage`, `tags`, `draft`) at build time with Zod (`src/lib/schema.ts`), automatically filtering out `draft: true` posts in production.
- **Zero-FOIT Dark / Light Theme**: Synchronous `<head>` script restores theme state from `localStorage` or `prefers-color-scheme` before first paint.
- **Auto-Generated Table of Contents & Code Copy**: Extracts `h2` and `h3` headings into a responsive sticky/inline TOC and adds one-click "Copy code" buttons to syntax-highlighted code blocks.
- **Client-Side Search, Tag Filtering & Pagination**: Interactive filtering on `/blog` with pagination support when posts exceed 10 items.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Static Production Build & Deployment

```bash
npm run build
```

This generates a standalone static site inside the `out/` folder containing:
- `out/index.html` (`/`)
- `out/blog.html` & `out/blog/[slug].html`
- `out/about.html` (`/about`)
- `out/404.html` (Custom 404 error page)
- `out/rss.xml` (RSS 2.0 feed)
- `out/sitemap.xml` (XML Sitemap)

### Deploying to Static Hosts

- **Cloudflare Pages**: Set Build command to `npm run build` and Build output directory to `out`.
- **GitHub Pages**: Upload the `out/` directory via `actions/upload-pages-artifact` and `actions/deploy-pages`.
- **Vercel / Netlify**: Connect the repository; Next.js static export is detected automatically (`out/`).
