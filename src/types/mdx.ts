export type GetMDXFields = 'slug' | 'frontMatter' | 'content';

export type PostMetadataType = {
  slug: string;
  title: string;
  excerpt: string;
  category: string[];
  coverImage?: string;
  updatedAt?: string;
  createdAt: string;
};
