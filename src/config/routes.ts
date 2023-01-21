import { LinkItem, PartialBy } from 'types';
import { TablerIcon, IconHome, IconArticle } from '@tabler/icons';

const Route = {
  home: '/',
  blog: '/blog',
} as const;

type MenuLink = PartialBy<LinkItem, 'link'> & { icon: TablerIcon };

const home = { label: 'Home', link: Route.home };
const blog = { label: 'Blog', link: `${Route.blog}/1` };

export const headerLinks: LinkItem[] = [home, blog];

export const menuLinks: MenuLink[] = [
  { ...home, icon: IconHome },
  { ...blog, icon: IconArticle },
];

export default Route;
