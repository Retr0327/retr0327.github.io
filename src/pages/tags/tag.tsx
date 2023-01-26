import { ReactElement } from 'react';
import { TagPageProps } from 'types/blog';
import { NextPageWithLayout } from 'types';
import type { GetStaticProps } from 'next';
import { getSortedPosts } from '@utils/mdx/path';
import BlogLayout from '@components/layout/Blog';
import SpotlightProvider from '@contexts/Spotlight';

const Tag: NextPageWithLayout<TagPageProps> = (props) => <>{JSON.stringify(props.posts)}</>;

export default Tag;

Tag.getLayout = function getLayout(page: ReactElement<TagPageProps>) {
  return (
    <SpotlightProvider posts={page.props.posts}>
      <BlogLayout posts={page.props.posts}>{page}</BlogLayout>
    </SpotlightProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getSortedPosts(['frontMatter']),
  },
});
