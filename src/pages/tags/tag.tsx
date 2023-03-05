import { TagPageProps } from 'types/blog';
import type { GetStaticProps } from 'next';
import { NextPageWithControl } from 'types';
import { getSortedPosts } from '@utils/mdx/path';
import BlogLayout from '@components/layout/Blog';
import TagPage from '@components/pages/Tags/Tag';
import SpotlightProvider from '@contexts/Spotlight';

const Tag: NextPageWithControl<TagPageProps> = (props) => <TagPage posts={props.posts} />;

Tag.control = {
  Layout: (props) => (
    <SpotlightProvider posts={props.children!.props.posts}>
      <BlogLayout posts={props.children!.props.posts}>{props.children}</BlogLayout>
    </SpotlightProvider>
  ),
};

export default Tag;

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getSortedPosts(['frontMatter']),
  },
});
