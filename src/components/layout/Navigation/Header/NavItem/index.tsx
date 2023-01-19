import { memo } from 'react';
import Link from 'next/link';
import { LinkItem } from 'types';
import { Text } from '@mantine/core';
import useStyles from './NavItem.styles';

type Props = { links: LinkItem[] };

function NavItems(props: Props) {
  const { classes } = useStyles();
  const { links } = props;

  return (
    <>
      {links.map((link) => (
        <Link href={link.link} key={link.label} className={classes.link}>
          <Text>{link.label}</Text>
        </Link>
      ))}
    </>
  );
}

export default memo(NavItems);
