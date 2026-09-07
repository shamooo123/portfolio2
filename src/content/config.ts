import { defineCollection, z } from "astro:content";

// Accept either full URLs (https://...) OR site paths (/assets/..., /images/...)
const link = z.string().refine(
  (v) => /^https?:\/\//i.test(v) || v.startsWith("/"),
  { message: "Must be an absolute URL (https://...) or a site path (/...)." }
);

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    cardTitle: z.string().optional(),
    category: z.string().default("Engineering project"),
    outcome: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
    imageStyle: z.string().optional(),
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
        report2: link.optional(),
        report2Label: z.string().optional(),
        demo: link.optional(),
        video: link.optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
