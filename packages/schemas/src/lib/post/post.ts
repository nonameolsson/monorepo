import { z } from 'zod';

export const PostSchema = z.object({
  id: z.number(),
  title: z.number(),
  body: z.string(),
  userId: z.number(),
});

export const PostsSchema = z.array(PostSchema);

export type Post = z.infer<typeof PostSchema>;
export type Posts = z.infer<typeof PostsSchema>;
