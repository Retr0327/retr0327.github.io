import layoutConfig from '@config/layout';
import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: rem(50),
    maxWidth: rem(1082),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: theme.spacing.xs,

    [`@media (max-width: ${em(layoutConfig.mdx.breakpoint)})`]: {
      maxWidth: '100%',
      paddingRight: 0,
      paddingBottom: rem(theme.spacing.xl),
    },
  },

  title: {
    fontSize: rem(44),
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xl,

    [`@media (max-width: ${em(layoutConfig.mdx.breakpoint)})`]: {
      fontSize: rem(32),
      lineHeight: 1.2,
    },
  },

  description: {
    maxWidth: rem(450),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    marginBottom: rem(theme.spacing.xl),

    [`@media (max-width: ${em(layoutConfig.mdx.breakpoint)})`]: {
      fontSize: rem(theme.fontSizes.md),
    },
  },
}));

export default useStyles;
