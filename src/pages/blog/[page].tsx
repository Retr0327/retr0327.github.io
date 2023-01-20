import { BlogGalleryProps } from 'types/blog';
import BlogLayout from '@components/layout/Blog';
import BlogGallery from '@components/pages/Blog/Gallery';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { countTotalPages, getSortedPosts, POSTS_PER_PAGE } from '@utils/mdx/path';

const Blog: NextPage<BlogGalleryProps> = (props) => (
  <BlogLayout>
    <BlogGallery {...props} />
  </BlogLayout>
);

export default Blog;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as { params: { page: string } };
  const posts = getSortedPosts(['frontMatter']);
  const pageIndex = Number(params.page) - 1;
  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = (pageIndex + 1) * POSTS_PER_PAGE;
  const totalPages = countTotalPages();

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      totalPages,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const totalPages = countTotalPages();
  const paths = [...Array(totalPages)].map((v, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};
