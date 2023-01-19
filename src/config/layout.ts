const layoutConfig = {
  cv: 'https://docs.google.com/document/d/1hiYT_QK5draFMMogwfwf5H2coHcJDveS/edit?usp=share_link&ouid=115833122300012543204&rtpof=true&sd=true',
  facebook: {
    color: '#1778F2',
    link: 'https://www.facebook.com/retr0327/',
  },
  github: {
    lixing: 'https://github.com/Retr0327',
    organization: {
      lopen: 'https://github.com/lopentu',
      ioltw: 'https://github.com/Taiwan-Olympiad-in-Linguistics',
      socialMedia: 'https://github.com/Taiwan-Social-Media-Corpus',
    },
  },
  mdx: {
    breakpoint: 1080,
    contentWidth: 820,
    tableOfContentsWidth: 260,
    tabHeight: 46,
    tabHeightMobile: 38,
  },
  header: { height: 60 },
  navbar: { width: 260, breakpoint: 760 },
  footer: { height: 400, heightTablet: 460, heightMobile: 320 },
} as const;

export default layoutConfig;
