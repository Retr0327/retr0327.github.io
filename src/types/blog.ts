import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type BlogGalleryProps = {
  posts: { slug: string; frontMatter: Frontmatter }[];
  totalPages: number;
};

export type BlogPostProps = {
  post: {
    source: MDXRemoteSerializeResult;
    headings: { depth: number; value: string }[];
  };
  frontMatter: Frontmatter;
  siblings: {
    next: Frontmatter | null;
    prev: Frontmatter | null;
  };
};

export interface Frontmatter {
  title: string;
  createdAt: string;
  slug: string;
  excerpt: string;
  category: string[];
  coverImage?: string;
  updatedAt?: string;
}
