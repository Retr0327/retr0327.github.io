import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 180,
    paddingBottom: 80,
    height: '96.5vh',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 140,
    },
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export default useStyles;
