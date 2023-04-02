import layoutConfig from '@config/layout';
import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  '@global': {
    '#nprogress': {
      zIndex: 100000,
    },
  },

  main: {
    scrollMarginTop: rem(layoutConfig.header.height),
    flex: 1,
    paddingTop: `calc(${rem(layoutConfig.header.height)} - ${theme.spacing.xl} - ${rem(2)})`,

    [`@media (max-width: ${em(layoutConfig.navbar.breakpoint)})`]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  content: {
    minHeight: `calc(100vh - ${rem(280)})`,
  },
}));

export default useStyles;
