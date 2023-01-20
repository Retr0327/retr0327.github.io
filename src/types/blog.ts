import { Frontmatter } from 'types/mdx';

export type BlogPageProps = {
  posts: { slug: string; frontMatter: Frontmatter }[];
  totalPages: number;
};
