import Link from 'next/link';
import { memo, ReactNode } from 'react';
import { FrontMatterProps } from 'types/blog';
import Footer from '@components/common/Footer';
import { IconSearch } from '@tabler/icons-react';
import { useSpotlight } from '@mantine/spotlight';
import Menu from '@components/common/Navigation/Menu';
import Navbar from '@components/common/Navigation/Navbar';
import Header from '@components/common/Navigation/Header';
import { headerLinks, createBlogLinks } from '@config/routes';
import createMenuItems from '@components/common/Navigation/Menu/Items';
import SearchControl from '@components/common/Navigation/Navbar/Control';
import { ActionIcon, Badge, Box, Menu as MantineMenu } from '@mantine/core';
import useStyles from './BlogLayout.styles';

type Props = {
  children: ReactNode;
  posts: FrontMatterProps[];
};

function BlogLayout(props: Props) {
  const { posts, children } = props;
  const { classes } = useStyles();
  const menuItems = createMenuItems();
  const spotlight = useSpotlight();
  const blogLinks = createBlogLinks(posts);

  return (
    <>
      <Header
        links={headerLinks}
        searchControl={
          <>
            <SearchControl onClick={spotlight.openSpotlight} />
            <ActionIcon
              sx={(theme) => ({
                [theme.fn.largerThan('sm')]: {
                  display: 'none',
                },
              })}
              onClick={spotlight.openSpotlight}
            >
              <IconSearch size={14} stroke={1.5} />
            </ActionIcon>
          </>
        }
      >
        <Menu
          menuItems={[
            ...menuItems,
            ...blogLinks.map((blogLink, index) => (
              <MantineMenu.Item
                key={`${blogLink.label}-${index}`}
                component={Link}
                href={blogLink.link!}
                icon={<blogLink.icon size={14} stroke={1.5} />}
                rightSection={
                  <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                    {blogLink.count}
                  </Badge>
                }
              >
                {blogLink.label}
              </MantineMenu.Item>
            )),
          ]}
        />
      </Header>
      <Navbar posts={posts} />
      <main className={classes.main}>
        <div className={classes.container}>
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
