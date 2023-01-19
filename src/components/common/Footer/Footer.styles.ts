import layoutConfig from '@config/layout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  spacer: {
    height: layoutConfig.footer.height,

    '@media (max-width: 800px)': {
      height: layoutConfig.footer.heightTablet,
    },

    '@media (max-width: 640px)': {
      height: layoutConfig.footer.heightMobile,
    },
  },

  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: layoutConfig.footer.height,

    '@media (max-width: 800px)': {
      height: layoutConfig.footer.heightTablet,
    },

    '@media (max-width: 640px)': {
      height: layoutConfig.footer.heightMobile,
    },
  },

  withNavbar: {
    paddingLeft: layoutConfig.navbar.width + theme.spacing.md * 2,
    paddingRight: theme.spacing.md * 2,

    [`@media (max-width: ${layoutConfig.mdx.breakpoint}px)`]: {
      paddingLeft: layoutConfig.navbar.width + theme.spacing.md,
      paddingRight: theme.spacing.md,
    },

    [`@media (max-width: ${layoutConfig.navbar.breakpoint}px)`]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  },

  inner: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 1000px)': {
      paddingTop: theme.spacing.lg,
      flexDirection: 'column',
    },

    '@media (max-width: 640px)': {
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.md,
    },
  },

  logoSection: {
    maxWidth: 300,

    '@media (max-width: 1000px)': {
      marginBottom: theme.spacing.xl,
    },

    '@media (max-width: 640px)': {
      marginBottom: 0,
    },
  },

  description: {
    marginTop: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
  },

  title: {
    marginBottom: theme.spacing.sm,
    lineHeight: 1,
  },

  afterFooter: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    paddingTop: theme.spacing.md,
  },

  afterFooterNote: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],

    '& a': {
      ...theme.fn.focusStyles(),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },
  },

  groups: {
    display: 'flex',

    '@media (max-width: 640px)': {
      display: 'none',
    },
  },

  social: {
    display: 'flex',

    '@media (max-width: 640px)': {
      display: 'block',
    },
  },

  socialButton: {
    '@media (max-width: 640px)': {
      flex: 1,
      width: '100%',
      marginLeft: 0,
      marginTop: theme.spacing.xs,
    },
  },
}));

export default useStyles;
