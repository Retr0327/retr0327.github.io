import { memo } from 'react';
import { TagPageProps } from 'types/blog';
import { Center, Stack } from '@mantine/core';
import TimeLine from '@components/common/TimeLine';
import Pagination from '@components/common/Pagination';
import useStyles from './TagPage.styles';

type Props = Pick<TagPageProps, 'selectedPosts' | 'totalPages'>;

function TagPage(props: Props) {
  const { selectedPosts, totalPages } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Stack spacing={60}>
        <TimeLine posts={selectedPosts} />
        <Center>
          <Pagination total={totalPages} />
        </Center>
      </Stack>
    </div>
  );
}

export default memo(TagPage);
