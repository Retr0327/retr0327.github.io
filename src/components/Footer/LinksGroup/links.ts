import { Route, Href } from '@config/index';
import { LinksGroupProps } from './types';

const links: LinksGroupProps[] = [
  {
    title: 'About',
    data: [
      {
        label: 'CV',
        isExternal: true,
        link: Href.CV,
      },
      { label: 'Blog', link: `${Route.Blog}/1` },
    ],
  },

  {
    title: 'Contact',
    data: [
      { label: 'Follow on LinkedIn', link: Href.Linkedin },
      { label: 'Follow on Github', link: Href.Github.Lixing },
      { label: 'Follow on Facebook', link: Href.Facebook },
    ],
  },

  {
    title: 'Organization',
    data: [
      { label: 'LOPEN', link: Href.Github.Organization.Lopen },
      { label: 'IOLTW', link: Href.Github.Organization.Ioltw },
      { label: 'Taiwan Social Media Corpus', link: Href.Github.Organization.SocialMedia },
    ],
  },
];

export default links;
