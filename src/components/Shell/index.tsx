'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { AppShell } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { searchHandlers } from '@components/Spotlight';
import { Route } from '@config';
import Header from './Header';
import Navbar from './Navbar';
import classes from './Shell.module.css';

const Footer = dynamic(() => import('./Footer'));

interface ShellProps {
  children: React.ReactNode;
}

function Shell(props: ShellProps) {
  const [opened, { toggle, close }] = useDisclosure();
  const pathname = usePathname();
  const matches = useMediaQuery('(max-width: 47.5em)');
  const withNavbar = pathname !== Route.Home || matches;
  const mainPadding = withNavbar ? undefined : 0;

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      transitionDuration={0}
      padding="md"
    >
      <Header navbarOpened={opened} onNavbarToggle={toggle} onSearch={searchHandlers.open} />
      {withNavbar && <Navbar navbarOpened={opened} onNavbarClose={close} />}
      <main
        className={classes.main}
        id="mdx"
        style={{ paddingLeft: mainPadding, paddingRight: mainPadding }}
      >
        {props.children}
        <Footer withNavbar={withNavbar} />
      </main>
      ;
    </AppShell>
  );
}

export default Shell;
