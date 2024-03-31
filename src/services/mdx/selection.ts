import { PostMetadataType } from 'types/mdx';
import { redirect } from 'next/navigation';

function pickMetadata(
  metadata: PostMetadataType[],
  pageParam: number,
  perPage: number,
  route: string
) {
  const pageIndex = pageParam - 1;
  const startIndex = pageIndex * perPage;
  const endIndex = (pageIndex + 1) * perPage;
  const totalPages = Math.ceil(metadata.length / perPage);
  const selectedMetadata = metadata.slice(startIndex, endIndex);

  if (selectedMetadata.length === 0) redirect(`${route}?page=1`);

  return { selectedMetadata, totalPages };
}

export { pickMetadata };
