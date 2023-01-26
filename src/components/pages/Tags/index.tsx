import { memo } from 'react';
import { countCategories } from '@utils/mdx';
import { BlogGalleryProps } from 'types/blog';
import TagCloud from './Cloud';
import useStyles from './TagsPage.styles';

type Props = Pick<BlogGalleryProps, 'posts'>;

function TagsPage(props: Props) {
  const { posts } = props;
  const { classes } = useStyles();
  const categoryCounts = countCategories(posts);

  return (
    <div className={classes.container}>
      <TagCloud data={categoryCounts} />
    </div>
  );
}

export default memo(TagsPage);
