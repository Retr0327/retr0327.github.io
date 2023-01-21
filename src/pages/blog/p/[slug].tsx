import { BlogPostProps } from 'types/blog';
import BlogLayout from '@components/layout/Blog';
import PostPage from '@components/pages/Blog/Post';
import createMdxElements from '@utils/mdx/elements';
import { getPosts, getSortedPosts } from '@utils/mdx/path';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';

const Post: NextPage<BlogPostProps> = (props) => {
  const { post, posts, frontMatter, siblings } = props;

  return (
    <article>
      <BlogLayout posts={posts}>
        <PostPage post={post} frontMatter={frontMatter} siblings={siblings} />
      </BlogLayout>
    </article>
  );
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
