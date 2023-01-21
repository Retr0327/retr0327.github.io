import Link from 'next/link';
import { LinkItem } from 'types';
import { memo, ReactNode } from 'react';
import { Header as MantineHeader, Group, Text } from '@mantine/core';
import ColorSchemeToggle from '@components/common/ColorSchemeToggle';
import NavItems from './NavItem';
import HeaderControls from './Controls';
import useStyles from './Header.styles';

type Props = {
  links: LinkItem[];
  children: ReactNode;
  searchControl?: JSX.Element;
};

function Header(props: Props) {
  const { links, children, searchControl } = props;
  const { classes } = useStyles();

  return (
    <MantineHeader height={60} className={classes.header}>
      {children}
      <Group>
        <div className={classes.logoWrapper}>
          <Link href="/" className={classes.logo}>
            <Text mb={5}> Lixing Yang </Text>
          </Link>
        </div>
      </Group>
      <Group>
        <Group spacing={5} className={classes.links}>
          <NavItems links={links} />
        </Group>
        {searchControl !== undefined ? searchControl : null}
        <HeaderControls />
        <ColorSchemeToggle />
      </Group>
    </MantineHeader>
  );
}

export default memo(Header);
