import { NextPageWithControl } from 'types';
import { countTotalPages } from '@utils/mdx';
import { BlogGalleryProps } from 'types/blog';
import BlogLayout from '@components/layout/Blog';
import SpotlightProvider from '@contexts/Spotlight';
import { GetStaticProps, GetStaticPaths } from 'next';
import ArchivesPage from '@components/pages/Archives';
import { getSortedPosts, TOTAL_POSTS } from '@utils/mdx/path';

const POSTS_PER_PAGE = 10;

const Archives: NextPageWithControl<BlogGalleryProps> = (props) => (
  <ArchivesPage totalPages={props.totalPages} posts={props.posts} />
);

Archives.control = {
  Layout: (props) => (
    <SpotlightProvider posts={props.children!.props.allPosts}>
      <BlogLayout posts={props.children!.props.allPosts}>{props.children}</BlogLayout>
    </SpotlightProvider>
  ),
};

export default Archives;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as { params: { page: string } };
  const posts = getSortedPosts(['frontMatter']);
  const pageIndex = Number(params.page) - 1;
  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = (pageIndex + 1) * POSTS_PER_PAGE;
  const totalPages = countTotalPages(TOTAL_POSTS, POSTS_PER_PAGE);

  return {
    props: {
      totalPages,
      allPosts: posts,
      posts: posts.slice(startIndex, endIndex),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const totalPages = countTotalPages(TOTAL_POSTS, POSTS_PER_PAGE);
  const paths = [...Array(totalPages)].map((_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};
