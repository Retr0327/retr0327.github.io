import { NextPageWithControl } from 'types';
import { countTotalPages } from '@utils/mdx';
import { BlogGalleryProps } from 'types/blog';
import BlogLayout from '@components/layout/Blog';
import SpotlightProvider from '@contexts/Spotlight';
import { GetStaticProps, GetStaticPaths } from 'next';
import ScrollToTop from '@components/common/ScrollToTop';
import BlogGallery from '@components/pages/Blog/Gallery';
import { getSortedPosts, TOTAL_POSTS } from '@utils/mdx/path';

const POSTS_PER_PAGE = 5;

const Blog: NextPageWithControl<BlogGalleryProps> = (props) => (
  <BlogGallery posts={props.posts} totalPages={props.totalPages} />
);

Blog.control = {
  Layout: (props) => (
    <SpotlightProvider posts={props.children!.props.allPosts}>
      <BlogLayout posts={props.children!.props.allPosts}>{props.children}</BlogLayout>
      <ScrollToTop />
    </SpotlightProvider>
  ),
};

export default Blog;

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
  const paths = [...Array(totalPages)].map((v, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};
