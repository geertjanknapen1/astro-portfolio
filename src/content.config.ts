import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['personal', 'professional']),
    status: z.enum(['in-progress', 'completed']),
    year: z.number().int(),
    order: z.number().int(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    company: z.string().optional(),
    employer: z.string().optional(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    coverCaption: z.string().optional(),
    technicalIntro: z.string().optional(),
    technicalChoices: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).default([]),
  }),
});

export const collections = { projects };
