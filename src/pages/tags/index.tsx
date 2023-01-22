import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { NextPageWithLayout } from 'types';
import { BlogGalleryProps } from 'types/blog';
import TagsPage from '@components/pages/Tags';
import BlogLayout from '@components/layout/Blog';
import { getSortedPosts } from '@utils/mdx/path';
import SpotlightProvider from '@contexts/Spotlight';

const Tags: NextPageWithLayout<Pick<BlogGalleryProps, 'posts'>> = (props) => (
  <TagsPage posts={props.posts} />
);

Tags.getLayout = function getLayout(page: ReactElement<Pick<BlogGalleryProps, 'posts'>>) {
  return (
    <SpotlightProvider posts={page.props.posts}>
      <BlogLayout posts={page.props.posts}>{page}</BlogLayout>
    </SpotlightProvider>
  );
};

export default Tags;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPosts(['frontMatter']);

  return {
    props: {
      posts,
    },
  };
};
