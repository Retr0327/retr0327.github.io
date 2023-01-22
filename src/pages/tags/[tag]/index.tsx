import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { NextPageWithLayout } from 'types';
import { BlogGalleryProps } from 'types/blog';
import { getSortedPosts } from '@utils/mdx/path';
import SpotlightProvider from '@contexts/Spotlight';
import BlogLayout from '@components/layout/Blog';

type Props = {
  posts: BlogGalleryProps['posts'];
  selectedPosts: BlogGalleryProps['posts'];
};

const Tag: NextPageWithLayout<Props> = (props) => <>{props.posts.length}</>;

Tag.getLayout = function getLayout(page: ReactElement<Props>) {
  return (
    <SpotlightProvider posts={page.props.posts}>
      <BlogLayout posts={page.props.posts}>{page}</BlogLayout>
    </SpotlightProvider>
  );
};

export default Tag;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tag } = context.query as { tag: string };
  const posts = getSortedPosts(['frontMatter']);
  const selectedPosts = posts.filter((post) => post.frontMatter.category.includes(tag));

  return {
    props: {
      posts,
      selectedPosts,
    },
  };
};
