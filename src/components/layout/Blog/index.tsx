import { memo, ReactNode } from 'react';
import { IconSearch } from '@tabler/icons';
import { headerLinks } from '@config/routes';
import Footer from '@components/common/Footer';
import { useSpotlight } from '@mantine/spotlight';
import Menu from '@components/common/Navigation/Menu';
import { Box, Menu as MantineMenu } from '@mantine/core';
import Header from '@components/common/Navigation/Header';
import Navbar from '@components/common/Navigation/Navbar';
import createMenuItems from '@components/common/Navigation/Menu/Items';
import SearchControl from '@components/common/Navigation/Navbar/Control';
import useStyles from './BlogLayout.styles';
import useNavigationLayoutStyles from '../NavigationLayout.styles';

type Props = {
  children: ReactNode;
};

function BlogLayout(props: Props) {
  const { children } = props;
  const { classes } = useStyles();
  const menuItems = createMenuItems();
  const spotlight = useSpotlight();
  const { classes: navigatoinClasses } = useNavigationLayoutStyles();

  return (
    <>
      <Header
        links={headerLinks}
        searchControl={<SearchControl onClick={spotlight.openSpotlight} />}
      >
        <Menu
          menuItems={[
            ...menuItems,
            <MantineMenu.Item
              key="spotlight"
              onClick={spotlight.openSpotlight}
              icon={<IconSearch size={14} stroke={1.5} />}
            >
              Search
            </MantineMenu.Item>,
          ]}
        />
      </Header>
      <Navbar />
      <main className={navigatoinClasses.main}>
        <div className={navigatoinClasses.content}>
          <Box className={classes.wrapper}>
            <Box className={classes.content}>{children}</Box>
          </Box>
          <Footer withNavbar />
        </div>
      </main>
    </>
  );
}

export default memo(BlogLayout);
