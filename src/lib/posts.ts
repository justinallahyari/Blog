import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostFrontmatterSchema, formatDate, type Post } from './schema';
import { calculateReadingTime, renderMarkdown } from './markdown';

export { formatDate };

const CONTENT_DIR = path.join(process.cwd(), 'content', 'posts');

export function getAllPosts(includeDrafts = false): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

  const isProd = process.env.NODE_ENV === 'production';

  const posts: Post[] = files.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, '');
    const fullPath = path.join(CONTENT_DIR, filename);
    const rawFile = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(rawFile);

    // Validate frontmatter strictly against Zod schema
    const parsedFrontmatter = PostFrontmatterSchema.parse(data);
    const { html, toc } = renderMarkdown(content);
    const { readingTime, readingMinutes } = calculateReadingTime(content);

    return {
      slug,
      frontmatter: parsedFrontmatter,
      content,
      html,
      readingTime,
      readingMinutes,
      toc,
    };
  });

  return posts
    .filter((post) => {
      if (includeDrafts) return true;
      if (isProd && post.frontmatter.draft) return false;
      return !post.frontmatter.draft;
    })
    .sort(
      (a, b) =>
        b.frontmatter.pubDate.getTime() - a.frontmatter.pubDate.getTime()
    );
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(limit = 3): Post[] {
  const posts = getAllPosts();
  const explicitFeatured = posts.filter((p) => p.frontmatter.featured);
  if (explicitFeatured.length >= 2) {
    return explicitFeatured.slice(0, limit);
  }
  return posts.slice(0, limit);
}

export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.frontmatter.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

