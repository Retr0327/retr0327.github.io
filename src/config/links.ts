import { FooterLinksGroupProps, LinkData, NavbarData } from 'types';
import { IconArchive, IconHome } from '@tabler/icons-react';
import { Href, Route } from './index';

export const FOOTER_LINKS_DATA: FooterLinksGroupProps[] = [
  {
    title: 'About',
    data: [
      { type: 'link', label: 'CV', link: Href.CV },
      { type: 'next', label: 'Blog', link: `${Route.Blog}?page=1` },
    ],
  },

  {
    title: 'Contact',
    data: [
      { type: 'link', label: 'Follow on LinkedIn', link: Href.Linkedin },
      { type: 'link', label: 'Follow on Github', link: Href.Github.Lixing },
      { type: 'link', label: 'Follow on Facebook', link: Href.Facebook },
    ],
  },
  {
    title: 'Organization',
    data: [
      { type: 'link', label: 'LOPEN', link: Href.Github.Organization.Lopen },
      { type: 'link', label: 'IOLTW', link: Href.Github.Organization.Ioltw },
      {
        type: 'link',
        label: 'Taiwan Social Media Corpus',
        link: Href.Github.Organization.SocialMedia,
      },
    ],
  },
] as const;

export const HEADER_LINKS_DATA: LinkData[] = [
  { type: 'next', label: 'Home', link: Route.Home },
  { type: 'next', label: 'Blog', link: `${Route.Blog}?page=1` },
] as const;

export const NAVBAR_LINKS_DATA: NavbarData[] = [
  { type: 'next', label: 'Home', link: Route.Home, icon: IconHome },
  { type: 'next', label: 'Blog', link: `${Route.Blog}?page=1`, icon: IconArchive },
];
