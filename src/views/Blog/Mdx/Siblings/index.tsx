import Link from 'next/link';
import cx from 'clsx';
import { Box, FOCUS_CLASS_NAMES, Text } from '@mantine/core';
import { useMdxData } from '@contexts/mdx-data';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import classes from './MdxSiblings.module.css';

interface MdxSiblingsProps {
  slug: string;
}

function MdxSiblings(props: MdxSiblingsProps) {
  const { mdx, getSiblingsBySlug } = useMdxData();
  const { prev, next } = getSiblingsBySlug(mdx.metadata, props.slug);

  return (
    <div className={classes.root}>
      {prev && (
        <Link href={prev.slug} className={cx(classes.link, FOCUS_CLASS_NAMES.auto)}>
          <IconArrowLeft stroke={1.5} className={classes.icon} />
          <Box mod="prev" className={classes.body}>
            <Text className={classes.title}>Previous</Text>
            <Text c="dimmed" className={classes.description}>
              {prev.title}
            </Text>
          </Box>
        </Link>
      )}
      {next && (
        <Link href={next.slug} className={cx(classes.link, FOCUS_CLASS_NAMES.auto)}>
          <Box mod="next" className={classes.body}>
            <Text className={classes.title}>Next</Text>
            <Text c="dimmed" className={classes.description}>
              {next.title}
            </Text>
          </Box>
          <IconArrowRight stroke={1.5} className={classes.icon} />
        </Link>
      )}
    </div>
  );
}

export default MdxSiblings;
