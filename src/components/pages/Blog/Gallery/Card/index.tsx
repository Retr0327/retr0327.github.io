import { memo } from 'react';
import { BlogGalleryProps } from 'types/blog';
import { Card, Stack, Image, Badge, Text, Group } from '@mantine/core';
import Link from 'next/link';
import useStyles from './PostCard.styles';

type Props = Pick<BlogGalleryProps, 'posts'>;

function PostCard(props: Props) {
  const { posts } = props;
  const { classes } = useStyles();

  const items = posts.map(({ frontMatter }, index) => (
    <Card key={`${frontMatter.title}-${index}`} withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Link href={frontMatter.slug}>
          <Image src={frontMatter.coverImage} height={300} />
        </Link>
      </Card.Section>

      <Text className={classes.title} weight={500} component={Link} href={frontMatter.slug}>
        {frontMatter.title}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {frontMatter.excerpt}
      </Text>

      <Group position="apart" className={classes.footer}>
        <Text size="sm" color="dimmed">
          發表於 {frontMatter.createdAt}
          {frontMatter.updatedAt !== undefined ? ` | 更新於 ${frontMatter.updatedAt}` : null}
        </Text>

        <Group spacing={8} mr={0}>
          {frontMatter.category.map((category, categoryIndex) => (
            <Badge
              key={`${category}-${categoryIndex}`}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
            >
              {category}
            </Badge>
          ))}
        </Group>
      </Group>
    </Card>
  ));
  return (
    <Stack align="center" sx={{ width: '100%' }} spacing={50}>
      {items}
    </Stack>
  );
}

export default memo(PostCard);
