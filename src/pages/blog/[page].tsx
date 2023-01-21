import { ReactElement } from 'react';
import { BlogGalleryProps } from 'types/blog';
import BlogLayout from '@components/layout/Blog';
import { NextPageWithLayout } from 'types/index';
import SpotlightProvider from '@contexts/Spotlight';
import { GetStaticProps, GetStaticPaths } from 'next';
import BlogGallery from '@components/pages/Blog/Gallery';
import { countTotalPages, getSortedPosts, POSTS_PER_PAGE } from '@utils/mdx/path';

const Blog: NextPageWithLayout<BlogGalleryProps> = (props) => <BlogGallery {...props} />;

export default Blog;

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <SpotlightProvider posts={page.props.allPosts}>
      <BlogLayout>{page}</BlogLayout>
    </SpotlightProvider>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as { params: { page: string } };
  const posts = getSortedPosts(['frontMatter']);
  const pageIndex = Number(params.page) - 1;
  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = (pageIndex + 1) * POSTS_PER_PAGE;
  const totalPages = countTotalPages();

  return {
    props: {
      totalPages,
      allPosts: posts,
      posts: posts.slice(startIndex, endIndex),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const totalPages = countTotalPages();
  const paths = [...Array(totalPages)].map((v, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};
