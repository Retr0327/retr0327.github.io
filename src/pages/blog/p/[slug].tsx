import { BlogPostProps } from 'types/blog';
import { NextPageWithControl } from 'types';
import BlogLayout from '@components/layout/Blog';
import PostPage from '@components/pages/Blog/Post';
import SpotlightProvider from '@contexts/Spotlight';
import createMdxElements from '@utils/mdx/elements';
import { getPosts, getSortedPosts } from '@utils/mdx/path';
import type { GetStaticPaths, GetStaticProps } from 'next';

const Post: NextPageWithControl<BlogPostProps> = (props) => {
  const { post, frontMatter, siblings } = props;

  return (
    <article>
      <PostPage post={post} frontMatter={frontMatter} siblings={siblings} />
    </article>
  );
};

Post.control = {
  Layout: (props) => (
    <SpotlightProvider posts={props.children!.props.posts}>
      <BlogLayout posts={props.children!.props.posts}>{props.children}</BlogLayout>
    </SpotlightProvider>
  ),
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as { params: { slug: string } };
  const { post, frontMatter, siblings } = await createMdxElements(params);
  const posts = getSortedPosts(['frontMatter']);

  return {
    props: {
      post,
      posts,
      frontMatter,
      siblings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getPosts(['slug']);
  const paths = posts.map((filename) => ({ params: { slug: filename.slug } }));

  return {
    paths,
    fallback: false,
  };
};
