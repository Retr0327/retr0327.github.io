'use client';

import { Route } from '@config';
import dynamic from 'next/dynamic';
import { useUncontrolled } from '@mantine/hooks';
import Header from '@components/common/Shell/Header';
import Navbar from '@components/common/Shell/Navbar';
import { usePathname } from 'next/navigation';
import ScrollAffix from '@components/common/ScrollAffix';
import { searchHandlers } from '@contexts/Spotlight';
import classes from './ShellProvider.module.css';

const Footer = dynamic(() => import('@components/common/Footer'), { ssr: false });

interface ShellProviderProps {
  children: React.ReactNode;
}

function ShellProvider(props: ShellProviderProps) {
  const { children } = props;
  const [opened, setNavbarOpened] = useUncontrolled({
    defaultValue: false,
    finalValue: false,
  });
  const pathname = usePathname();
  const toggleNavbar = () => setNavbarOpened(!opened);
  const closeNavbar = () => setNavbarOpened(false);
  const withNavbar = pathname !== Route.Home;
  const mainPadding = withNavbar ? undefined : 0;

  return (
    <>
      <Header onSearch={searchHandlers.open} navbarOpened={opened} onNavbarToggle={toggleNavbar} />
      {withNavbar && <Navbar navbarOpened={opened} onNavbarClose={closeNavbar} />}
      {withNavbar && <ScrollAffix />}
      <main
        className={classes.main}
        id="mdx"
        style={{ paddingLeft: mainPadding, paddingRight: mainPadding }}
      >
        {children}
        <Footer withNavbar={withNavbar} />
      </main>
    </>
  );
}

export default ShellProvider;
