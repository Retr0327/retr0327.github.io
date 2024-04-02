import urlJoin from 'url-join';

const POSTS_PER_PAGE = 6;
const ARCHIVES_PER_PAGE = 10;
const isProduction = process.env.NODE_ENV === 'production';
const root = isProduction ? 'https://retr0327.github.io' : '/';

const url = (...args: string[]): string => urlJoin(root, ...args);
const blog = (...args: string[]) => url('blog', ...args);

const Route = {
  Home: url(root),
  Blog: blog(),
  BlogPost: blog('p'),
  Tags: blog('tags'),
  Archives: blog('archives'),
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

export { POSTS_PER_PAGE, ARCHIVES_PER_PAGE, root, isProduction, Route, Href };
