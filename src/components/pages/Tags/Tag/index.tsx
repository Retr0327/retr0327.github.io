import Route from '@config/routes';
import { memo, useMemo } from 'react';
import { useRouter } from 'next/router';
import { TagPageProps } from 'types/blog';
import { Center, Stack } from '@mantine/core';
import TimeLine from '@components/common/TimeLine';
import Pagination from '@components/common/Pagination';
import useTagPosts from './utils';
import useStyles from './TagPage.styles';

function TagPage(props: TagPageProps) {
  const { posts } = props;
  const router = useRouter();
  const { classes } = useStyles();
  const [selectedPosts, totalPages] = useMemo(
    () => useTagPosts(posts, router.query),
    [router.query, posts]
  );

  const handleChange = (value: number) => {
    const pushURL = `${Route.tags}/tag?id=${encodeURI(router.query.id as string)}${encodeURI(
      '&'
    )}page=${value}`;
    if (router.asPath === pushURL) return undefined;
    return router.push(pushURL);
  };

  return (
    <div className={classes.container}>
      <Stack spacing={60}>
        <TimeLine posts={selectedPosts} />
        <Center>
          <Pagination total={totalPages} onChange={handleChange} />
        </Center>
      </Stack>
    </div>
  );
}

export default memo(TagPage);
