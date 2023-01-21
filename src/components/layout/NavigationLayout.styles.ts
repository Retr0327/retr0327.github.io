import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  '@global': {
    '#nprogress': {
      zIndex: 100000,
    },
  },

  withNavbar: {
    paddingLeft: layoutConfig.navbar.width,

    [`@media (max-width: ${layoutConfig.navbar.breakpoint}px)`]: {
      paddingLeft: 0,
    },
  },

  main: {
    scrollMarginTop: layoutConfig.header.height,
    flex: 1,
    paddingTop: layoutConfig.header.height - theme.spacing.xl - 2,

    [`@media (max-width: ${layoutConfig.navbar.breakpoint}px)`]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  content: {
    minHeight: 'calc(100vh - 280px)',
  },
}));

export default useStyles;
