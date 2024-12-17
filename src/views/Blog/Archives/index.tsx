import { redirect, useSearchParams } from 'next/navigation';
import { Center, Container, Stack } from '@mantine/core';
import Pagination from '@components/Pagination';
import BlogTimeline from '@components/Timeline';
import { ARCHIVES_PER_PAGE, Route } from '@config';
import { useMdxData } from '@contexts/mdx-data';
import classes from './BlogArchives.module.css';

function BlogArchives() {
  const page = Number(useSearchParams().get('page') || 1);
  const { mdx, pick } = useMdxData();
  const result = pick(mdx.metadata, page, ARCHIVES_PER_PAGE);
  if (result === null) {
    redirect(`${Route.Archives}?page=1`);
  }
  const { selectedMetadata, totalPages } = result;
  return (
    <div className={classes.container}>
      <Container size={1000}>
        <Stack gap={60}>
          <BlogTimeline metadata={selectedMetadata} />
          <Center>
            <Pagination total={totalPages} defaultValue={page} />
          </Center>
        </Stack>
      </Container>
    </div>
  );
}

export default BlogArchives;
