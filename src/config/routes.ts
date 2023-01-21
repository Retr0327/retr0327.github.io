import { Frontmatter } from 'types/blog';
import { MenuLink, NavLink, LinkItem } from 'types';
import { IconArchive, IconHome, IconArticle, IconTag, IconCategory } from '@tabler/icons';

const Route = {
  home: '/',
  blog: '/blog',
  tags: '/tags',
  archives: '/archives',
  categories: '/categories',
} as const;

const home = { label: 'Home', link: Route.home };
const blog = { label: 'Blog', link: `${Route.blog}/1` };

export const headerLinks: LinkItem[] = [home, blog];

export const menuLinks: MenuLink[] = [
  { ...home, icon: IconHome },
  { ...blog, icon: IconArticle },
];

export function createBlogLinks(posts: { frontMatter: Frontmatter }[]): NavLink[] {
  const categoryCounts = new Map();

  posts.forEach((post) => {
    post.frontMatter.category.forEach((category) => {
      categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
    });
  });

  return [
    { label: 'Tags', link: Route.tags, icon: IconTag, count: categoryCounts.size },
    { label: 'Category', link: Route.categories, icon: IconCategory, count: categoryCounts.size },
    { label: 'Archives', link: Route.archives, icon: IconArchive, count: posts.length },
  ];
}

export default Route;
