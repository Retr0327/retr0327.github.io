import { FrontMatterProps } from 'types/blog';
import { ParsedUrlQuery } from 'querystring';
import { countTotalPages } from '@utils/mdx';

const POSTS_PER_PAGE = 10;

type Posts = FrontMatterProps[];

function useTagPosts(posts: Posts, query: ParsedUrlQuery): [Posts, number] {
  const { id, page } = query as { id: string; page: string };
  const selectedPosts = posts.filter((post) => post.frontMatter.category.includes(id));
  const pageIndex = Number(page) - 1;
  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = (pageIndex + 1) * POSTS_PER_PAGE;
  const totalPages = countTotalPages(selectedPosts, POSTS_PER_PAGE);

  return [selectedPosts.slice(startIndex, endIndex), totalPages];
}

export default useTagPosts;
