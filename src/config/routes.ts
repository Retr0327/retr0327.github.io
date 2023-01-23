import { FrontMatterProps } from 'types/blog';
import countCategories from '@utils/mdx/category';
import { MenuLink, NavLink, LinkItem } from 'types';
import { IconArchive, IconHome, IconArticle, IconTag, IconCategory } from '@tabler/icons';

const Route = {
  home: '/',
  blog: '/blog',
  tags: '/tags',
  archives: '/archives',
  categories: '/categories',
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
    { label: 'Category', link: Route.categories, icon: IconCategory, count: size },
    { label: 'Archives', link: `${Route.archives}/1`, icon: IconArchive, count: posts.length },
  ];
}

export default Route;
