import { Stack, Center, Container } from '@mantine/core';
import BlogTimeline from '@components/Timeline';
import Pagination from '@components/Pagination';
import { useMdxMetadata } from '@contexts/Mdx';
import { pickMetadata } from '@services/mdx/selection';
import { ARCHIVES_PER_PAGE } from '@config/index';
import { redirect } from 'next/navigation';
import { Route } from '@config';
import classes from './BlogTagArchives.module.css';

interface BlogTagArchivesProps {
  tag: string;
  page: number;
}

function BlogTagArchives(props: BlogTagArchivesProps) {
  const { tag, page } = props;
  const metadata = useMdxMetadata();
  const filteredMetadata = metadata.filter((post) => post.category.includes(tag));
  if (filteredMetadata.length === 0) {
    redirect(Route.NotFound);
  }

  const { selectedMetadata, totalPages } = pickMetadata(
    filteredMetadata,
    page,
    ARCHIVES_PER_PAGE,
    `${Route.Tags}/${tag}`
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

export default BlogTagArchives;
