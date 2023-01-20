import { memo } from 'react';
import { Stack } from '@mantine/core';
import { BlogGalleryProps } from 'types/blog';
import PostCard from './Card';
import Pagination from './Pagination';
import useStyles from './BlogGallery.styles';

type Props = Omit<BlogGalleryProps, 'allPosts'>;

function BlogGallery(props: Props) {
  const { posts, totalPages } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Stack align="center" spacing={60}>
        <PostCard posts={posts} />
        <Pagination total={totalPages} />
      </Stack>
    </div>
  );
}

export default memo(BlogGallery);
