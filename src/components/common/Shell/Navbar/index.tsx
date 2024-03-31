import cx from 'clsx';
import { Box } from '@mantine/core';
import SearchControl from '@components/common/Controls/Search';
import { NAVBAR_LINKS_DATA } from '@config/links';
import { NavbarData } from 'types';
import { useMdxMetadata } from '@contexts/Mdx';
import { IconArchive, IconTag } from '@tabler/icons-react';
import { Route } from '@config';
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
    <Box component="nav" className={cx(classes.navbar)} mod={{ hidden: !navbarOpened }}>
      <Box className={classes.body} mod={{ 'border-bottom': !navbarOpened }}>
        {!navbarOpened && <SearchControl mb={20} />}
        <NavbarLinksGroup data={links} onNavbarClose={onNavbarClose} />
      </Box>
    </Box>
  );
}

export default Navbar;
