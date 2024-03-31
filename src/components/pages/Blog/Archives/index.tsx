import { Stack, Center, Container } from '@mantine/core';
import BlogTimeline from '@components/common/Timeline';
import Pagination from '@components/common/Pagination';
import { useSearchParams } from 'next/navigation';
import { ARCHIVES_PER_PAGE, Route } from '@config';
import { useMdxMetadata } from '@contexts/Mdx';
import { pickMetadata } from '@services/mdx/selection';
import classes from './BlogArchives.module.css';

function BlogArchives() {
  const page = Number(useSearchParams().get('page') || 1);
  const metadata = useMdxMetadata();
  const { selectedMetadata, totalPages } = pickMetadata(
    metadata,
    page,
    ARCHIVES_PER_PAGE,
    Route.Archives
  );

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
