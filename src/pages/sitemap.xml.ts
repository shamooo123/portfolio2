import { getCollection } from 'astro:content';
import { SITE } from '../site-config';

export async function GET() {
  const projects = await getCollection('projects');
  const paths = ['/', '/projects/', ...projects.map(project => `/projects/${project.slug}/`)];
  const entries = paths.map(path => `<url><loc>${new URL(path, SITE.domain).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
