import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  burger: {
    marginRight: theme.spacing.md,
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  item: {
    '&[data-hovered]': {
      backgroundColor: theme.colorScheme === 'dark' ? 'rgba(24, 100, 171, 0.45)' : '#e7f5ff',
      color: theme.colorScheme === 'dark' ? theme.white : '#1971c2',
    },
  },
}));

export default useStyles;
