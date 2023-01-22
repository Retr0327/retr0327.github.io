import { memo } from 'react';
import { Frontmatter } from 'types/blog';
import { Title, Text } from '@mantine/core';
import Badge from '@components/common/Badge';
import useStyles from './MdxHeader.styles';

type Props = { frontMatter: Frontmatter };

function MdxHeader(props: Props) {
  const { frontMatter } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <Title className={classes.title}>{frontMatter.title}</Title>

      <Text size="lg" className={classes.description}>
        發表於 {frontMatter.createdAt}
        {frontMatter.updatedAt !== undefined ? ` | 更新於 ${frontMatter.updatedAt}` : null}
      </Text>

      <Badge data={frontMatter.category} />
    </div>
  );
}

export default memo(MdxHeader);
