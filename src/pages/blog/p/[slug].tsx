import { BlogPostProps } from 'types/blog';
import { getPosts } from '@utils/mdx/path';
import PostPage from '@components/pages/Blog/Post';
import createMdxElements from '@utils/mdx/elements';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

const Post: NextPage<BlogPostProps> = (props) => {
  const { post, frontMatter, siblings } = props;

  return (
    <article>
      <PostPage post={post} frontMatter={frontMatter} siblings={siblings} />
    </article>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as { params: { slug: string } };
  const { post, frontMatter, siblings } = await createMdxElements(params);

  return {
    props: {
      post,
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
