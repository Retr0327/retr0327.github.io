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
      { label: 'Blog', link: `${Route.blog}/1` },
    ],
  },

  {
    title: 'Contact',
    data: [
      { label: 'Follow on LinkedIn', link: layoutConfig.linkedin.link },
      { label: 'Follow on Github', link: layoutConfig.github.lixing },
      { label: 'Follow on Facebook', link: layoutConfig.facebook.link },
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
