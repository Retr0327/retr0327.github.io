import layoutConfig from '@config/layout';
import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles(() => ({
  container: {
    paddingTop: rem(80),
    width: '100%',
    maxWidth: rem(layoutConfig.mdx.contentWidth + layoutConfig.mdx.tableOfContentsWidth),
    marginLeft: 'auto',
    marginRight: 'auto',

    [`@media (max-width: ${em(layoutConfig.mdx.breakpoint)})`]: {
      width: '100%',
      paddingRight: 0,
    },
  },
}));

export default useStyles;
