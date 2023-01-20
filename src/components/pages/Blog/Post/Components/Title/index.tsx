import { memo } from 'react';
import Link from 'next/link';
import { Title, Text } from '@mantine/core';
import useStyles from './Title.styles';

function MdxTitle(props: React.ComponentPropsWithoutRef<typeof Title>) {
  const { classes } = useStyles();
  const { id, children, order, ...rest } = props;

  if (order === 1) {
    return (
      <Title className={classes.title} sx={{ fontWeight: 900, fontSize: 44 }}>
        {children}
      </Title>
    );
  }

  return (
    <>
      <div id={id} className={classes.offset} />
      <Title order={order} className={classes.title} sx={{ fontWeight: 600 }} {...rest}>
        <Link className={classes.link} href={`#${id}`}>
          <Text>{children}</Text>
        </Link>
      </Title>
    </>
  );
}

export default memo(MdxTitle);
