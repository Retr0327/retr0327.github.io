import { ReactElement } from 'react';
import { BlogPostProps } from 'types/blog';
import { NextPageWithLayout } from 'types/index';
import BlogLayout from '@components/layout/Blog';
import PostPage from '@components/pages/Blog/Post';
import SpotlightProvider from '@contexts/Spotlight';
import createMdxElements from '@utils/mdx/elements';
import { getPosts, getSortedPosts } from '@utils/mdx/path';
import type { GetStaticPaths, GetStaticProps } from 'next';

const Post: NextPageWithLayout<BlogPostProps> = (props) => {
  const { post, frontMatter, siblings } = props;

  return (
    <article>
      <PostPage post={post} frontMatter={frontMatter} siblings={siblings} />
    </article>
  );
};

export default Post;

Post.getLayout = function getLayout(page: ReactElement<BlogPostProps>) {
  return (
    <SpotlightProvider posts={page.props.posts}>
      <BlogLayout posts={page.props.posts}>{page}</BlogLayout>
    </SpotlightProvider>
  );
};

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
