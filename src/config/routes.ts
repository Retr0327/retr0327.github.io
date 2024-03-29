import { countCategories } from '@utils/mdx';
import { FrontMatterProps } from 'types/blog';
import { MenuLink, NavLink, LinkItem } from 'types';
import { IconArchive, IconHome, IconArticle, IconTag } from '@tabler/icons-react';

const Route = {
  home: '/',
  blog: '/blog',
  tags: '/tags',
  archives: '/archives',
  notFound: '/404',
} as const;

const home = { label: 'Home', link: Route.home };
const blog = { label: 'Blog', link: `${Route.blog}/1` };

export const headerLinks: LinkItem[] = [home, blog];

export const menuLinks: MenuLink[] = [
  { ...home, icon: IconHome },
  { ...blog, icon: IconArticle },
];

export function createBlogLinks(posts: FrontMatterProps[]): NavLink[] {
  const categoryCounts = countCategories(posts);
  const size = Object.keys(categoryCounts).length;

  return [
    { label: 'Tags', link: Route.tags, icon: IconTag, count: size },
    { label: 'Archives', link: `${Route.archives}/1`, icon: IconArchive, count: posts.length },
  ];
}

export default Route;
