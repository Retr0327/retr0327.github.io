import layoutConfig from '@config/layout';
import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    scrollMarginTop: rem(layoutConfig.header.height),
    flex: 1,
    paddingTop: `calc(${rem(layoutConfig.header.height)} - ${theme.spacing.xl} - ${rem(2)})`,

    [`@media (max-width: ${em(layoutConfig.navbar.breakpoint)})`]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  container: {
    minHeight: `calc(100vh - ${rem(280)})`,
  },

  wrapper: {
    paddingLeft: rem(layoutConfig.navbar.width),

    [`@media (max-width: ${em(layoutConfig.navbar.breakpoint)})`]: {
      paddingLeft: 0,
    },
  },

  content: {
    minHeight: `calc(100vh - ${rem(350)})`,
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    boxShadow: theme.colorScheme === 'dark' ? 'none' : theme.shadows.sm,
    paddingBottom: rem(80),
  },

  mainLinkBadge: {
    padding: 0,
    width: 20,
    height: 20,
    pointerEvents: 'none',
  },
}));

export default useStyles;
