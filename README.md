# Hishaam Abbasi | Engineering portfolio

A static portfolio for Hishaam Ali Abbasi, a First Class Robotics Engineering graduate. Built with Astro 4, Tailwind and custom CSS.

The redesign puts practical engineering work first: original build photography, concise project summaries, clear case studies and a single main CV download.

## Run locally

Use a Node.js version supported by the installed Astro version, then:

```sh
npm ci
npm run dev
```

## Build for the existing website

```sh
npm run build
```

The complete static website is generated in `dist/`. Serve the contents of that directory from your existing web server. Keep the folder structure intact. Project pages use directory URLs, so the server should serve each directory's `index.html`. Configure the server to use `404.html` for missing pages.

The canonical domain remains `https://hishaamabbasi.co.uk`. The private review copy does not change your existing public website.

## Main files

| What to change | File |
|---|---|
| Home page, education and experience | `src/pages/index.astro` |
| Project writing and metadata | `src/content/projects/*.md` |
| Case study layout | `src/pages/projects/[slug].astro` |
| Project archive and filters | `src/pages/projects/index.astro` |
| Colours, type and responsive layouts | `src/styles/global.css` |
| Contact and social links | `src/site-config.ts` |
| Navigation and footer | `src/components/` |
| Photos and downloadable documents | `public/images/` and `public/assets/` |

## The main CV

The homepage downloads `public/assets/Hishaam_Ali_Abbasi_CV.pdf`, the updated two-page general CV supplied with this website. Replace that file when updating the CV, then rebuild. The older PDF files remain available at their existing paths for compatibility, but they are not presented as competing download choices.

## Images

The visible build photography comes from the supplied portfolio and design reports. The trainer photos were extracted from the individual report. Optimised WebP copies are used by the pages; the original image files remain available. The site does not use stock photos to stand in for Hishaam's own projects.

## Accessibility and behaviour

- Semantic headings, labelled navigation and a skip link.
- Visible keyboard focus and reduced-motion support.
- Mobile menu works using native HTML details, with Escape and link-close behaviour added by JavaScript.
- All projects are available without JavaScript; category filters enhance the archive when JavaScript is available.
- Case study contents links, responsive tables and descriptive image captions.
- Report PDFs and the main CV remain direct links.

See `REDESIGN_NOTES.md` for changes, content decisions and verification limits.
