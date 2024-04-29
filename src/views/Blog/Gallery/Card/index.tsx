import { Card as MantineCard, Stack, Image, Text, Group } from '@mantine/core';
import Link from 'next/link';
import { Route } from '@config';
import Badge from '@components/Badge';
import { PostMetadataType } from 'types/mdx';
import classes from './Card.module.css';

interface CardProps {
  metadata: PostMetadataType[];
}

function Card(props: CardProps) {
  const { metadata } = props;
  const items = metadata.map((post, index) => (
    <MantineCard key={`${post.title}-${index}`} withBorder radius="md" className={classes.card}>
      <MantineCard.Section>
        <Link href={`${Route.BlogPost}/${post.slug}`}>
          <Image src={post.coverImage} height={300} />
        </Link>
      </MantineCard.Section>

      <Text
        className={classes.title}
        component={Link}
        href={`${Route.BlogPost}/${post.slug}`}
        fw={500}
      >
        {post.title}
      </Text>

      <Text size="sm" c="dimmed" lineClamp={4}>
        {post.excerpt}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Text size="sm" c="dimmed">
          發表於 {post.createdAt}
          {post.updatedAt !== undefined ? ` | 更新於 ${post.updatedAt}` : null}
        </Text>
        <Badge badges={post.category} />
      </Group>
    </MantineCard>
  ));
  return (
    <Stack align="center" style={{ width: '100%' }} gap={50}>
      {items}
    </Stack>
  );
}

export default Card;
