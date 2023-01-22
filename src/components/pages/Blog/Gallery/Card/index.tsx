import Link from 'next/link';
import { memo } from 'react';
import Badge from '@components/common/Badge';
import { BlogGalleryProps } from 'types/blog';
import { Card, Stack, Image, Text, Group } from '@mantine/core';
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
        <Badge data={frontMatter.category} />
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
