import { z } from 'zod';

/**
 * Strict content collection schema for blog post frontmatter.
 */
export const PostFrontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().optional().default(false),
});

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  html: string;
  readingTime: string;
  readingMinutes: number;
  toc: TocItem[];
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(d);
}

