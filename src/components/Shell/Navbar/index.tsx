import { AppShell, Box, ScrollArea } from '@mantine/core';
import cx from 'clsx';
import { NAVBAR_LINKS_DATA } from '@config/links';
import SearchButton from '@components/SearchButton';
import { NavbarData } from 'types';
import { useMdxMetadata } from '@contexts/Mdx';
import { Route } from '@config';
import { IconArchive, IconTag } from '@tabler/icons-react';
import NavbarLinksGroup from './LinksGroup';
import classes from './Navbar.module.css';

interface NavbarProps {
  navbarOpened: boolean;
  onNavbarClose: () => void;
}

function Navbar(props: NavbarProps) {
  const { navbarOpened, onNavbarClose } = props;
  const metadata = useMdxMetadata();
  const categories = new Set(metadata.flatMap((post) => post.category));
  const links: NavbarData[] = [
    ...NAVBAR_LINKS_DATA,
    { type: 'next', label: 'Tags', link: Route.Tags, icon: IconTag, count: categories.size },
    {
      type: 'next',
      label: 'Archives',
      icon: IconArchive,
      count: metadata.length,
      link: `${Route.Archives}?page=1`,
    },
  ];

  return (
    <AppShell.Navbar>
      <AppShell.Section
        grow
        component={ScrollArea}
        type="never"
        offsetScrollbars={false}
        className={cx(classes.navbar)}
        mod={{ hidden: !navbarOpened }}
      >
        <Box className={classes.body} mod={{ 'border-bottom': !navbarOpened }}>
          {!navbarOpened && <SearchButton mb={20} />}
          <NavbarLinksGroup data={links} onNavbarClose={onNavbarClose} />
        </Box>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}

export default Navbar;
