import { PostMetadataType } from 'types/mdx';
import { Box, Text, Title } from '@mantine/core';
import Badge from '@components/Badge';
import classes from './MdxPageHeader.module.css';

interface MdxPageHeaderProps {
  metadata: PostMetadataType;
}

function MdxPageHeader(props: MdxPageHeaderProps) {
  const { title, createdAt, updatedAt, category } = props.metadata;
  return (
    <div>
      <Box className={classes.header}>
        <Title className={classes.title}>{title}</Title>
        <Text className={classes.timestamp}>
          發表於 {createdAt}
          {updatedAt !== undefined ? ` | 更新於 ${updatedAt}` : null}
        </Text>
        <Badge badges={category} />
      </Box>
    </div>
  );
}

export default MdxPageHeader;
