# Build and edit the portfolio

Run `npm ci` to install the exact dependencies in the lockfile. Run `npm run dev` for local development, `npm run build` to generate the static site, and `npm run preview` to inspect the build locally.

Upload the contents of `dist/` to the web root used by the existing hosting setup. Preserve subdirectories and PDF/image files. The source remains an Astro project and does not require moving the public site to a different hosting provider.

## Add a project

Create a Markdown file in `src/content/projects/`. Its filename becomes the URL slug.

```yaml
---
title: My project
cardTitle: Short card title
subtitle: One concise sentence about the actual build.
category: Mechanical design
featured: false
order: 8
timeline: "2026"
role: Your actual contribution
outcome: An evidenced result or a clear current status
tags: [CAD, Prototyping]
heroImage: /images/my-project.webp
heroAlt: Describe what the image shows.
heroCaption: Explain the photograph or result.
---
```

Quote dates such as `timeline: "2026"` so the value stays a string. Use second-level headings (`##`) for the main case study sections; these populate the contents navigation automatically. For optional PDF, repository and video links, follow the existing trainer front matter.

The archive filters are mapped in `src/pages/projects/index.astro`. Include the new project in the appropriate categories there. The homepage displays the first four featured projects in `order` sequence.

## Image captions

Use a `figure` containing an `img` and a `figcaption`. Supply an accurate `alt`, dimensions and `loading="lazy"` for images lower down the page. Do not use a generic product photograph as evidence of your own build.

## Keep facts current

Update project status and dates when work changes. Keep proposed improvements separate from completed work. The current CV is authoritative for qualifications and experience.
