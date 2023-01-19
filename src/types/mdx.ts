import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Frontmatter {
  title: string;
  date: string;
  slug: string;
  order: number;
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
