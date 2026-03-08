# Hishaam Abbasi — Portfolio (Astro) 

This repo contains a static portfolio site built with **Astro + Tailwind**, designed to deploy cleanly on **Vercel**.

## Local development

1) Install Node.js (recommended: Node 20 LTS).

2) Install dependencies:

```bash
npm install
```

3) Run the dev server:

```bash
npm run dev
```

Astro will print a local URL (usually http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Where to edit

- Home page: `src/pages/index.astro`
- Projects list: `src/pages/projects/index.astro`
- Project pages (content): `src/content/projects/*.md`
- Project page template: `src/pages/projects/[slug].astro`
- Global styling: `src/styles/global.css`
- Static assets (images, PDFs): `public/`

## Adding a new project case study

Create a new markdown file in `src/content/projects/`:

```md
---
title: "My Project"
subtitle: "One-line value proposition"
featured: false
order: 10
timeline: "2026"
role: "What you owned"
tags: ["ROS2", "C++"]
heroImage: "/images/my-project.jpg"
links:
  repo: "https://github.com/..."
  demo: "https://..."
---

## Problem
...

## What I built
...
```

## SEO

- Canonical URLs and OpenGraph tags are set in `src/layouts/BaseLayout.astro`.
- Domain/canonical is configured in `astro.config.mjs` via `site: 'https://hishaamabbasi.co.uk'`.
