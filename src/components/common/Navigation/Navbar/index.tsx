import { memo } from 'react';
import { Frontmatter } from 'types/blog';
import { IconHome } from '@tabler/icons';
import { useSpotlight } from '@mantine/spotlight';
import Route, { createBlogLinks } from '@config/routes';
import { Navbar as MantineNavbar } from '@mantine/core';
import NavItems from './NavItem';
import SearchControl from './Control';
import useStyles from './Navbar.styles';

type Props = { posts: { frontMatter: Frontmatter }[] };

function Navbar(props: Props) {
  const { classes } = useStyles();
  const spotlight = useSpotlight();
  const { posts } = props;
  const links = createBlogLinks(posts);

  return (
    <MantineNavbar className={classes.navbar}>
      <MantineNavbar.Section className={classes.section}>
        <SearchControl onClick={spotlight.openSpotlight} sx={{ width: '100%' }} mb={20} />
        <NavItems links={[{ label: 'Home', link: Route.home, icon: IconHome }, ...links]} />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}

export default memo(Navbar);
