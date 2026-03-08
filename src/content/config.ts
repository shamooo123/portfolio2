import { defineCollection, z } from 'astro:content';

// Accept either full URLs (https://...) OR site paths (/assets/..., /images/...)
const link = z.string().refine(
  (v) => /^https?:\/\//i.test(v) || v.startsWith('/'),
  { message: 'Must be an absolute URL (https://...) or a site path (/assets/...)' }
);

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    timeline: z.string().optional(),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    links: z
      .object({
        repo: link.optional(),
        report: link.optional(),
        demo: link.optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };