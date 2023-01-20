import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  container: {
    marginTop: 80,
    width: '100%',
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
