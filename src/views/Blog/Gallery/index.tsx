import { redirect, useSearchParams } from 'next/navigation';
import { Container, Stack } from '@mantine/core';
import Pagination from '@components/Pagination';
import { POSTS_PER_PAGE, Route } from '@config';
import { useMdxData } from '@contexts/mdx-data';
import Card from './Card';
import classes from './BlogGallery.module.css';

function BlogGallery() {
  const page = Number(useSearchParams().get('page') || 1);
  const { mdx, pick } = useMdxData();
  const result = pick(mdx.metadata, page, POSTS_PER_PAGE);
  if (result === null) {
    redirect(`${Route.Blog}?page=1`);
  }
  const { selectedMetadata, totalPages } = result;
  return (
    <div className={classes.container}>
      <Stack align="center" gap={60}>
        <Container>
          <Card metadata={selectedMetadata} />
        </Container>
        <Pagination total={totalPages} defaultValue={page} />
      </Stack>
    </div>
  );
}

export default BlogGallery;
