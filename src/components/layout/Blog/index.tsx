import dynamic from 'next/dynamic';
import { Box } from '@mantine/core';
import { memo, ReactNode } from 'react';
import useStyles from './BlogLayout.styles';

const Footer = dynamic(() => import('@components/common/Footer'));

function BlogLayout({ children }: { children: ReactNode }) {
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.content}>
        <Box className={classes.wrapper}>{children}</Box>
      </Box>
      <Footer withNavbar />
    </>
  );
}

export default memo(BlogLayout);
