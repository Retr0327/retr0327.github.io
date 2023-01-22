import Link from 'next/link';
import { memo, useMemo } from 'react';
import { Text, Timeline as MantineTimeline } from '@mantine/core';
import filterPosts from './utils';
import { TimeLineProps, FilterPosts } from './types';

function TimeLine(props: TimeLineProps) {
  const posts = filterPosts(props.posts) as FilterPosts;

  const timelineItems = useMemo(
    () =>
      posts.map((post) =>
        post.map((postItems, index) => {
          if (typeof postItems === 'string') {
            return (
              <MantineTimeline.Item
                key={`${postItems}-${index}`}
                title={<Text size="lg">{postItems}</Text>}
              />
            );
          }

          return postItems.map((postItem, postItemIndex) => (
            <MantineTimeline.Item
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
    <MantineTimeline active={-1} lineWidth={2} p={10}>
      {timelineItems}
    </MantineTimeline>
  );
}

export default memo(TimeLine);
