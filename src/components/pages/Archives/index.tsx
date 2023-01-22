import { memo } from 'react';
import { BlogGalleryProps } from 'types/blog';
import { Stack, Center } from '@mantine/core';
import TimeLine from '@components/common/TimeLine';
import Pagination from '@components/common/Pagination';
import useStyles from './ArchivesPage.styles';

type Props = Omit<BlogGalleryProps, 'allPosts'>;

function ArchivesPage(props: Props) {
  const { posts, totalPages } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Stack spacing={60}>
        <TimeLine posts={posts} />
        <Center>
          <Pagination total={totalPages} />
        </Center>
      </Stack>
    </div>
  );
}

export default memo(ArchivesPage);
