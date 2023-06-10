import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean(),
    isWorkInProgress: z.boolean().optional(),
    title: z.string(),
    titleTC: z.string(),
    description: z.string(),
    link: z
      .object({
        url: z.string().optional(),
        sourceCodeUrl: z.string().optional(),
      })
      .optional(),
    thumbnail: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    video: z.array(z.object({ src: z.string(), type: z.string() })).optional(),
    tech: z.array(z.string()).optional(),
    themeColor: z.string().min(4).max(9).regex(/^#/).default('#fff'),
    publishDate: z.date(),
  }),
});

export const collections = {
  project: projectCollection,
};
