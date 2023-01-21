import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navbar: {
    boxSizing: 'border-box',
    height: '100vh',
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    position: 'fixed',
    zIndex: 5,
    top: 0,
    bottom: 0,
    left: 0,
    width: layoutConfig.navbar.width,

    [`@media (max-width: ${layoutConfig.navbar.breakpoint}px)`]: {
      display: 'none',
    },
  },

  section: {
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.xs * 2,
    paddingLeft: theme.spacing.md,
    paddingTop: layoutConfig.header.height + theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${layoutConfig.navbar.breakpoint}px)`]: {
      paddingBottom: 120,
    },
  },
}));

export default useStyles;
