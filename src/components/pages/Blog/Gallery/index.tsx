import { useSearchParams } from 'next/navigation';
import { Route, POSTS_PER_PAGE } from '@config';
import { useMdxMetadata } from '@contexts/Mdx';
import { pickMetadata } from '@services/mdx/selection';
import { Stack, Container } from '@mantine/core';
import Pagination from '@components/common/Pagination';
import classes from './BlogGallery.module.css';
import Card from './Card';

function BlogGallery() {
  const page = Number(useSearchParams().get('page') || 1);
  const metadata = useMdxMetadata();
  const { selectedMetadata, totalPages } = pickMetadata(metadata, page, POSTS_PER_PAGE, Route.Blog);

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
