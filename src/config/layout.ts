const layoutConfig = {
  avatar:
    'https://scontent.fkhh1-2.fna.fbcdn.net/v/t1.6435-9/90348802_2879430425476831_5109053951542558720_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=soyfcAOpwxYAX_Gmt-4&_nc_ht=scontent.fkhh1-2.fna&oh=00_AfCuvvtDME6K7RQX33SrhEWClPrrBA_IPdJeFe-Uac9SZw&oe=63F1D1FA',
  cv: 'https://docs.google.com/document/d/1hiYT_QK5draFMMogwfwf5H2coHcJDveS/edit?usp=share_link&ouid=115833122300012543204&rtpof=true&sd=true',
  linkedin: {
    color: '#0A66C2',
    link: 'https://www.linkedin.com/in/lixing-yang-1a2037230/',
  },
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
