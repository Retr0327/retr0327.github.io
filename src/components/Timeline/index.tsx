import { PostMetadataType } from 'types/mdx';
import { Text, Timeline } from '@mantine/core';
import Link from 'next/link';
import { Route } from '@config';
import classes from './Timeline.module.css';
import groupByYear from './group-by';

interface BlogTimelineProps {
  metadata: PostMetadataType[];
}

function BlogTimeline(props: BlogTimelineProps) {
  const groups = groupByYear(props.metadata);
  const items = groups.map((group) =>
    group.map((item, index) => {
      if (typeof item === 'string') {
        return <Timeline.Item key={`${item}-${index}`} title={<Text size="lg">{item}</Text>} />;
      }

      return item.map((post, postIndex) => (
        <Timeline.Item
          className={classes.postItem}
          key={`${post.slug}-${postIndex}`}
          title={
            <Text component={Link} href={`${Route.BlogPost}/${post.slug}`} size="sm">
              {post.date}{' '}
              <Text component="span" size="md" ml={15} className={classes.title}>
                {post.title}
              </Text>
            </Text>
          }
        />
      ));
    })
  );

  return (
    <Timeline active={-1} lineWidth={2} p={10}>
      {items}
    </Timeline>
  );
}

export default BlogTimeline;
