import { ReactElement } from 'react';
import ScrollToTop from '@components/common/ScrollToTop';
import { countTotalPages } from '@utils/mdx';
import { BlogGalleryProps } from 'types/blog';
import BlogLayout from '@components/layout/Blog';
import { NextPageWithLayout } from 'types/index';
import SpotlightProvider from '@contexts/Spotlight';
import { GetStaticProps, GetStaticPaths } from 'next';
import BlogGallery from '@components/pages/Blog/Gallery';
import { getSortedPosts, TOTAL_POSTS } from '@utils/mdx/path';

const POSTS_PER_PAGE = 8;

const Blog: NextPageWithLayout<BlogGalleryProps> = (props) => (
  <BlogGallery posts={props.posts} totalPages={props.totalPages} />
);

export default Blog;

Blog.getLayout = function getLayout(page: ReactElement<BlogGalleryProps>) {
  return (
    <SpotlightProvider posts={page.props.allPosts}>
      <BlogLayout posts={page.props.allPosts}>{page}</BlogLayout>
      <ScrollToTop />
    </SpotlightProvider>
  );
};

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
