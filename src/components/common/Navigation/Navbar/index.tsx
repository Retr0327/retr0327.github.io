import { memo } from 'react';
import { FrontMatterProps } from 'types/blog';
import { useSpotlight } from '@mantine/spotlight';
import { Navbar as MantineNavbar } from '@mantine/core';
import { menuLinks, createBlogLinks } from '@config/routes';
import NavItems from './NavItem';
import SearchControl from './Control';
import useStyles from './Navbar.styles';

type Props = { posts: FrontMatterProps[] };

function Navbar(props: Props) {
  const { classes } = useStyles();
  const spotlight = useSpotlight();
  const { posts } = props;
  const links = createBlogLinks(posts);

  return (
    <MantineNavbar className={classes.navbar}>
      <MantineNavbar.Section className={classes.section}>
        <SearchControl onClick={spotlight.openSpotlight} sx={{ width: '100%' }} mb={20} />
        <NavItems links={[...menuLinks, ...links]} />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}

export default memo(Navbar);
