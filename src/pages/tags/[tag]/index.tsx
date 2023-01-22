import { ReactElement } from 'react';
import { NextPageWithLayout } from 'types';
import { BlogGalleryProps } from 'types/blog';
import BlogLayout from '@components/layout/Blog';
import { getSortedPosts } from '@utils/mdx/path';
import SpotlightProvider from '@contexts/Spotlight';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  posts: BlogGalleryProps['posts'];
  selectedPosts: BlogGalleryProps['posts'];
};

const Tag: NextPageWithLayout<Props> = () => <>sd</>;

Tag.getLayout = function getLayout(page: ReactElement<Props>) {
  return (
    <SpotlightProvider posts={page.props.posts}>
      <BlogLayout posts={page.props.posts}>{page}</BlogLayout>
    </SpotlightProvider>
  );
};

export default Tag;

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as { tag: string };
  const posts = getSortedPosts(['frontMatter']);
  const selectedPosts = posts.filter((post) => post.frontMatter.category.includes(tag));

  return {
    props: {
      posts,
      selectedPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ tag: string }> = async () => ({
  paths: [],
  fallback: 'blocking',
});
