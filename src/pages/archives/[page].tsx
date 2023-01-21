import { ReactElement } from 'react';
import { BlogGalleryProps } from 'types/blog';
import { NextPageWithLayout } from 'types/index';
import BlogLayout from '@components/layout/Blog';
import SpotlightProvider from '@contexts/Spotlight';
import { GetStaticProps, GetStaticPaths } from 'next';
import ArchivesPage from '@components/pages/Archives';
import { countTotalPages, getSortedPosts } from '@utils/mdx/path';

const POSTS_PER_PAGE = 10;

const Archives: NextPageWithLayout<BlogGalleryProps> = (props) => (
  <ArchivesPage totalPages={props.totalPages} posts={props.posts} />
);

export default Archives;

Archives.getLayout = function getLayout(page: ReactElement<BlogGalleryProps>) {
  return (
    <SpotlightProvider posts={page.props.allPosts}>
      <BlogLayout posts={page.props.allPosts}>{page}</BlogLayout>
    </SpotlightProvider>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as { params: { page: string } };
  const posts = getSortedPosts(['frontMatter']);
  const pageIndex = Number(params.page) - 1;
  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = (pageIndex + 1) * POSTS_PER_PAGE;
  const totalPages = countTotalPages(POSTS_PER_PAGE);

  return {
    props: {
      totalPages,
      allPosts: posts,
      posts: posts.slice(startIndex, endIndex),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const totalPages = countTotalPages(POSTS_PER_PAGE);
  const paths = [...Array(totalPages)].map((_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};
