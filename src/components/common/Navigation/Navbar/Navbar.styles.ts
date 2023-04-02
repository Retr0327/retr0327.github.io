import layoutConfig from '@config/layout';
import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navbar: {
    boxSizing: 'border-box',
    height: '100vh',
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    position: 'fixed',
    zIndex: 5,
    top: 0,
    bottom: 0,
    left: 0,
    width: layoutConfig.navbar.width,

    [`@media (max-width: ${em(layoutConfig.navbar.breakpoint)})`]: {
      display: 'none',
    },
  },

  section: {
    paddingRight: theme.spacing.md,
    paddingBottom: `calc(${theme.spacing.xs} * 2)`,
    paddingLeft: theme.spacing.md,
    paddingTop: `calc(${rem(layoutConfig.header.height)} + ${theme.spacing.md})`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${em(layoutConfig.navbar.breakpoint)})`]: {
      paddingBottom: 120,
    },
  },
}));

export default useStyles;
