import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: 50,
    maxWidth: 1082,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: theme.spacing.xs,

    [`@media (max-width: ${layoutConfig.mdx.breakpoint}px)`]: {
      maxWidth: '100%',
      paddingRight: 0,
      paddingBottom: theme.spacing.xl,
    },
  },

  title: {
    fontSize: 44,
    marginBottom: theme.spacing.xs / 2,
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xl,

    [`@media (max-width: ${layoutConfig.mdx.breakpoint}px)`]: {
      fontSize: 32,
      lineHeight: 1.2,
    },
  },

  description: {
    maxWidth: 450,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    marginBottom: theme.spacing.xl,

    [`@media (max-width: ${layoutConfig.mdx.breakpoint}px)`]: {
      fontSize: theme.fontSizes.md,
    },
  },
}));

export default useStyles;
