import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Frontmatter {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  category: string[];
  coverImage?: string;
}

export type MdxPageProps = {
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
