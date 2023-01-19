import Route from '@config/routes';
import layoutConfig from '@config/layout';
import { LinksGroupProps } from './types';

const links: LinksGroupProps[] = [
  {
    title: 'About',
    data: [
      {
        label: 'CV',
        isNewTab: true,
        link: layoutConfig.cv,
      },
      { label: 'About Me', link: Route.about },
    ],
  },

  {
    title: 'Contact',
    data: [
      { label: 'Follow on Facebook', link: layoutConfig.facebook.link },
      { label: 'Follow on Github', link: layoutConfig.github.lixing },
    ],
  },

  {
    title: 'Organization',
    data: [
      { label: 'LOPEN', link: layoutConfig.github.organization.lopen },
      { label: 'IOLTW', link: layoutConfig.github.organization.ioltw },
      { label: 'Taiwan Social Media Corpus', link: layoutConfig.github.organization.socialMedia },
    ],
  },
];

export default links;
