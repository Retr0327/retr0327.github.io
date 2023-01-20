import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    marginTop: theme.spacing.xl * 1.2,
    marginBottom: theme.spacing.md,
    wordBreak: 'break-word',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  link: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    color: 'inherit',
  },

  offset: {
    position: 'relative',
    top: -62,
  },
}));

export default useStyles;
