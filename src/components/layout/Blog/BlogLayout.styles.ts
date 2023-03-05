import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    scrollMarginTop: layoutConfig.header.height,
    flex: 1,
    paddingTop: layoutConfig.header.height - theme.spacing.xl - 2,

    [`@media (max-width: ${layoutConfig.navbar.breakpoint}px)`]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  container: {
    minHeight: 'calc(100vh - 280px)',
  },

  wrapper: {
    paddingLeft: layoutConfig.navbar.width,

    [`@media (max-width: ${layoutConfig.navbar.breakpoint}px)`]: {
      paddingLeft: 0,
    },
  },

  content: {
    minHeight: 'calc(100vh - 350px)',
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    boxShadow: theme.colorScheme === 'dark' ? 'none' : theme.shadows.sm,
    paddingBottom: 80,
  },

  mainLinkBadge: {
    padding: 0,
    width: 20,
    height: 20,
    pointerEvents: 'none',
  },
}));

export default useStyles;
