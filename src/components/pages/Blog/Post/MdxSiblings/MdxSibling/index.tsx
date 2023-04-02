import Link from 'next/link';
import { Text } from '@mantine/core';
import { Frontmatter } from 'types/blog';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import useStyles from './MdxSibling.styles';

type MdxSiblingProps = {
  data: Frontmatter;
  type: 'next' | 'prev';
};

function MdxSibling(props: MdxSiblingProps) {
  const { data, type } = props;
  const { classes } = useStyles();

  return (
    <Link href={data.slug} className={classes.control}>
      {type === 'prev' && <IconArrowLeft size={22} stroke={1.5} />}
      <div className={classes.body}>
        <Text size="lg" align={type === 'next' ? 'left' : 'right'}>
          {type === 'next' ? 'Up next' : 'Go back'}
        </Text>
        <Text color="dimmed" size="sm" align={type === 'next' ? 'left' : 'right'}>
          {data.title}
        </Text>
      </div>
      {type === 'next' && <IconArrowRight size={22} stroke={1.5} />}
    </Link>
  );
}

export default MdxSibling;
