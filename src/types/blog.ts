import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type BlogGalleryProps = {
  posts: FrontMatterProps[];
  allPosts: FrontMatterProps[];
  totalPages: number;
};

export type TagPageProps = Pick<BlogGalleryProps, 'posts'>;

export type BlogPostProps = {
  post: {
    source: MDXRemoteSerializeResult;
    headings: { depth: number; value: string }[];
  };
  posts: FrontMatterProps[];
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

export type FrontMatterProps = { frontMatter: Frontmatter };
