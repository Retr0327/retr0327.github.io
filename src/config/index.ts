import urlJoin from 'url-join';

const isProduction = process.env.NODE_ENV === 'production';
const root = isProduction ? 'https://retr0327.github.io' : '/';

const url = (...args: string[]): string => urlJoin(root, ...args);

const Route = {
  Home: url(),
  Blog: url('blog'),
  Tags: url('tags'),
  Archives: url('archives'),
  NotFound: url('404'),
} as const;

const Href = {
  Avatar: 'https://i.imgur.com/6Dve09Q.jpg',
  CV: 'https://docs.google.com/document/d/1hiYT_QK5draFMMogwfwf5H2coHcJDveS/edit?usp=share_link&ouid=115833122300012543204&rtpof=true&sd=true',
  Linkedin: 'https://www.linkedin.com/in/lixing-yang-1a2037230/',
  Facebook: 'https://www.facebook.com/retr0327/',
  Github: {
    Lixing: 'https://github.com/Retr0327',
    Organization: {
      Lopen: 'https://github.com/lopentu',
      Ioltw: 'https://github.com/Taiwan-Olympiad-in-Linguistics',
      SocialMedia: 'https://github.com/Taiwan-Social-Media-Corpus',
    },
  },
} as const;

export { root, isProduction, Route, Href };
