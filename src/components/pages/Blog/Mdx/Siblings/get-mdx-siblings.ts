import { PostMetadataType } from 'types/mdx';

export function getMdxSiblings(
  slug: string,
  metadata: PostMetadataType[]
): {
  prev: PostMetadataType | undefined;
  next: PostMetadataType | undefined;
} {
  const index = metadata.findIndex((page) => page.slug === slug);
  const prev = metadata[index - 1];
  const next = metadata[index + 1];

  return { prev, next };
}
