import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
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
