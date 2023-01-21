import dynamic from 'next/dynamic';
import { Box } from '@mantine/core';
import { memo, ReactNode } from 'react';
import { Frontmatter } from 'types/blog';
import SpotlightProvider from '@contexts/Spotlight';
import Navbar from '../Navigation/Navbar';
import useStyles from './BlogLayout.styles';

const Footer = dynamic(() => import('@components/common/Footer'));

type Props = {
  children: ReactNode;
  posts: { frontMatter: Frontmatter }[];
};

function BlogLayout(props: Props) {
  const { posts, children } = props;
  const { classes } = useStyles();

  return (
    <SpotlightProvider posts={posts}>
      <Box className={classes.wrapper}>
        <Navbar />
        <Box className={classes.content}>
          <Box>{children}</Box>
        </Box>
      </Box>
      <Footer withNavbar />
    </SpotlightProvider>
  );
}

export default memo(BlogLayout);
