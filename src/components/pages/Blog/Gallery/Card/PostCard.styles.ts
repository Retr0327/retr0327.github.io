import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    width: '80%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    '@media (max-width: 420px)': {
      width: '90%',
    },
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

export default useStyles;
