import cx from 'clsx';
import { NavbarData } from 'types';
import { AppShell, Box, ScrollArea } from '@mantine/core';
import SearchButton from '@components/SearchButton';
import { Route } from '@config';
import { NAVBAR_LINKS_DATA } from '@config/links';
import { useMdxData } from '@contexts/mdx-data';
import { IconArchive, IconTag } from '@tabler/icons-react';
import NavbarLinksGroup from './LinksGroup';
import classes from './Navbar.module.css';

interface NavbarProps {
  navbarOpened: boolean;
  onNavbarClose: () => void;
}

function Navbar(props: NavbarProps) {
  const { navbarOpened, onNavbarClose } = props;
  const { mdx } = useMdxData();
  const categorySet = new Set(mdx.categories);
  const links: NavbarData[] = [
    ...NAVBAR_LINKS_DATA,
    { type: 'next', label: 'Tags', link: Route.Tags, icon: IconTag, count: categorySet.size },
    {
      type: 'next',
      label: 'Archives',
      icon: IconArchive,
      count: mdx.metadata.length,
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
