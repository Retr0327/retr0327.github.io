import { createStyles, rem, em } from '@mantine/core';

const BREAKPOINT = `@media (max-width: ${em(960)})`;

const useStyles = createStyles((theme) => ({
  inner: {
    position: 'relative',
    paddingTop: rem(130),
    paddingBottom: rem(300),

    [BREAKPOINT]: {
      paddingTop: rem(50),
      paddingBottom: rem(100),
    },
  },

  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${rem(theme.spacing.xl)}`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  subTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(25),
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export default useStyles;
