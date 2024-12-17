import { useRouter } from 'next/navigation';
import { Center, Container, Stack } from '@mantine/core';
import Pagination from '@components/Pagination';
import BlogTimeline from '@components/Timeline';
import { Route } from '@config';
import { ARCHIVES_PER_PAGE } from '@config/index';
import { useMdxData } from '@contexts/mdx-data';
import classes from './BlogTagArchives.module.css';

interface BlogTagArchivesProps {
  tag: string;
  page: number;
}

function BlogTagArchives(props: BlogTagArchivesProps) {
  const { tag, page } = props;
  const { mdx, pick } = useMdxData();
  const router = useRouter();
  const filteredMetadata = mdx.metadata.filter((post) => post.category.includes(tag));
  if (filteredMetadata.length === 0) {
    router.push(Route.NotFound);
    return null;
  }

  const result = pick(filteredMetadata, page, ARCHIVES_PER_PAGE);
  if (result === null) {
    router.push(`${Route.Tags}/${tag}?page=1`);
    return null;
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

export default BlogTagArchives;
