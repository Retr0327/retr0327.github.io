module.exports = {
  plugins: {
    'postcss-preset-mantine': {
      autoRem: true,
    },
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
        'facebook-color': '#1778F2',
        'facebook-color-hover': '#4390F3',
        'linkedin-color': '#0A66C2',
        'linkedin-color-hover': '#1971D6',
        'github-color': '#000000',
        'github-color-hover': '#575757',
        'table-content-width': '260px',
        'header-height': '60px',
        'navbar-width': '260px',
        'navbar-breakpoint': '47.5em',
        'footer-breakpoint-tablet': '62.5em',
        'footer-breakpoint-mobile': '40em',
        'footer-width': '260px',
        'mdx-breakpoint': '67.5em',
        'mdx-content-width': '820px',
      },
    },
  },
};
