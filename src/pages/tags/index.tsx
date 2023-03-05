import { GetStaticProps } from 'next';
import { NextPageWithControl } from 'types';
import { BlogGalleryProps } from 'types/blog';
import TagsPage from '@components/pages/Tags';
import BlogLayout from '@components/layout/Blog';
import { getSortedPosts } from '@utils/mdx/path';
import SpotlightProvider from '@contexts/Spotlight';

const Tags: NextPageWithControl<Pick<BlogGalleryProps, 'posts'>> = (props) => (
  <TagsPage posts={props.posts} />
);

Tags.control = {
  Layout: (props) => (
    <SpotlightProvider posts={props.children!.props.posts}>
      <BlogLayout posts={props.children!.props.posts}>{props.children}</BlogLayout>
    </SpotlightProvider>
  ),
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
