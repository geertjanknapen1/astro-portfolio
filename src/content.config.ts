import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['personal', 'professional']),
    status: z.enum(['in-progress', 'completed']),
    year: z.number(),
    order: z.number(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),

    // Nieuw
    company: z.string().optional(),
    employer: z.string().optional(),
  }),
});

export const collections = {
  projects,
};