import { memo } from 'react';
import Link from 'next/link';
import { LinkItem } from 'types';
import dynamic from 'next/dynamic';
import Route from '@config/routes';
import { Header as MantineHeader, Group, Text } from '@mantine/core';
import ColorSchemeToggle from '@components/common/ColorSchemeToggle';
import NavItems from './NavItem';
import HeaderControls from './Controls';
import useStyles from './Header.styles';

const Menu = dynamic(() => import('./Menu'));

const links: LinkItem[] = [
  { label: 'Home', link: Route.home },
  { label: 'Blog', link: Route.blog },
  { label: 'About', link: Route.about },
];

function Header() {
  const { classes } = useStyles();

  return (
    <MantineHeader height={60} className={classes.header}>
      <Menu />
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
        <HeaderControls />
        <ColorSchemeToggle />
      </Group>
    </MantineHeader>
  );
}

export default memo(Header);
