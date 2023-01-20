import { Frontmatter } from 'types/mdx';

export type BlogGalleryProps = {
  posts: { slug: string; frontMatter: Frontmatter }[];
  totalPages: number;
};
