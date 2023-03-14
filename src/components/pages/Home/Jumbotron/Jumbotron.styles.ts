import { createStyles } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 960px)';

const useStyles = createStyles((theme) => ({
  inner: {
    position: 'relative',
    paddingTop: 130,
    paddingBottom: 300,

    [BREAKPOINT]: {
      paddingTop: 50,
      paddingBottom: 100,
    },
  },

  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  subTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export default useStyles;
