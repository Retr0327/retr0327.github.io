import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: 'var(--removed-scroll-width, 0px)',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[3]
    }`,
    top: 0,
    left: 0,
    right: 0,
    height: layoutConfig.header.height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
  },

  logo: {
    paddingLeft: theme.spacing.md,
    height: layoutConfig.header.height,
    paddingTop: 6,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? '#ffff' : 'black',
    },
  },

  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'all',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  version: {
    ...theme.fn.focusStyles(),
    fontWeight: 700,
    textDecoration: 'none',
    marginTop: 5,

    [theme.fn.smallerThan(860)]: {
      display: 'none',
    },
  },
}));

export default useStyles;
