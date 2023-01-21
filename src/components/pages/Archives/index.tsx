import Link from 'next/link';
import { memo, useMemo } from 'react';
import Pagination from '@components/common/Pagination';
import { Timeline, Text, Stack, Center } from '@mantine/core';
import filterPosts from './utils';
import useStyles from './ArchivesPage.styles';
import { ArchivesPageProps, FilterPosts } from './types';

function ArchivesPage(props: ArchivesPageProps) {
  const { classes } = useStyles();
  const posts = filterPosts(props.posts) as FilterPosts;

  const timelineItems = useMemo(
    () =>
      posts.map((post) =>
        post.map((postItems, index) => {
          if (typeof postItems === 'string') {
            return (
              <Timeline.Item
                key={`${postItems}-${index}`}
                title={<Text size="lg">{postItems}</Text>}
              />
            );
          }

          return postItems.map((postItem, postItemIndex) => (
            <Timeline.Item
              bulletSize={15}
              key={`${postItem.title}-${postItemIndex}`}
              title={
                <Text component={Link} href={postItem.slug} size="sm">
                  {postItem.date}{' '}
                  <Text component="span" size="md" ml={15}>
                    {postItem.title}
                  </Text>
                </Text>
              }
            />
          ));
        })
      ),
    [posts]
  );

  return (
    <div className={classes.container}>
      <Stack spacing={60}>
        <Timeline active={-1} lineWidth={2} p={10}>
          {timelineItems}
        </Timeline>
        <Center>
          <Pagination total={props.totalPages} />
        </Center>
      </Stack>
    </div>
  );
}

export default memo(ArchivesPage);
