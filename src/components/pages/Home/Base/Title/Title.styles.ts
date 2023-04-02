import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    display: 'inline-block',
    position: 'relative',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    fontSize: rem(42),
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    textAlign: 'left',
    marginBottom: `calc(${theme.spacing.xl} * 2)`,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      marginBottom: theme.spacing.md,
    },

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: rem(10),
      height: rem(10),
    },

    [`@media (max-width: ${em(600)})`]: {
      fontSize: rem(28),
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
