import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    zIndex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.xl * 2,
    paddingRight: theme.spacing.xl * 2,

    [`@media (max-width: ${layoutConfig.mdx.breakpoint}px)`]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  },

  container: {
    marginTop: theme.spacing.xl,
    width: '100%',
    maxWidth: layoutConfig.mdx.contentWidth + layoutConfig.mdx.tableOfContentsWidth,
    marginLeft: 'auto',
    marginRight: 'auto',

    [`@media (max-width: ${layoutConfig.mdx.breakpoint}px)`]: {
      width: '100%',
      paddingRight: 0,
    },
  },

  tableOfContents: {
    flex: `0 0 ${layoutConfig.mdx.tableOfContentsWidth}px`,

    [`@media (max-width: ${layoutConfig.mdx.breakpoint}px)`]: {
      display: 'none',
    },
  },
}));

export default useStyles;
