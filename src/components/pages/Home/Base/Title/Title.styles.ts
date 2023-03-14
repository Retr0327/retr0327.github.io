import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    display: 'inline-block',
    position: 'relative',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    fontSize: 42,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    textAlign: 'left',
    marginBottom: theme.spacing.xl * 2,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      marginBottom: theme.spacing.md,
    },

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: 10,
      height: 10,
    },

    '@media (max-width: 600px)': {
      fontSize: 28,
      marginLeft: 0,

      '&::before, &::after': {
        display: 'none',
      },
    },
  },

  default: {
    '&::before, &::after': {
      borderColor: 'inherit',
    },
  },
}));

export default useStyles;
