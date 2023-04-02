import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    width: '80%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    [`@media (max-width: ${em(420)})`]: {
      width: '90%',
    },
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: `calc(${rem(theme.spacing.xs)} / 2)`,
  },

  footer: {
    marginTop: rem(theme.spacing.md),
  },
}));

export default useStyles;
