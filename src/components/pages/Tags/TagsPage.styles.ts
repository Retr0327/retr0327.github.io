import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  container: {
    paddingTop: 80,
    width: '100%',
    paddingLeft: 20,
    maxWidth: layoutConfig.mdx.contentWidth + layoutConfig.mdx.tableOfContentsWidth,
    marginLeft: 'auto',
    marginRight: 'auto',

    [`@media (max-width: ${layoutConfig.mdx.breakpoint}px)`]: {
      width: '100%',
      paddingRight: 0,
    },
  },
}));

export default useStyles;
