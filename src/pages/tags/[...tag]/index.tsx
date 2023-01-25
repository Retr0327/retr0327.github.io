// import Route from '@config/routes';
// import { ReactElement } from 'react';
import { TagPageProps } from 'types/blog';
import { NextPageWithLayout } from 'types';
// import BlogLayout from '@components/layout/Blog';
// import TagPage from '@components/pages/Tags/Tag';
// import SpotlightProvider from '@contexts/Spotlight';
// import { GetStaticPaths, GetStaticProps } from 'next';
// import { getSortedPosts, countTotalPages } from '@utils/mdx/path';

// const POSTS_PER_PAGE = 10;

const Tag: NextPageWithLayout<TagPageProps> = () => (
  // <TagPage selectedPosts={props.selectedPosts} totalPages={props.totalPages} />
  <>s</>
);

// Tag.getLayout = function getLayout(page: ReactElement<TagPageProps>) {
//   return (
//     <SpotlightProvider posts={page.props.posts}>
//       <BlogLayout posts={page.props.posts}>{page}</BlogLayout>
//     </SpotlightProvider>
//   );
// };

export default Tag;

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { tag } = context.params as { tag: string[] };
//   const redirect = { redirect: { permanent: false, destination: Route.notFound } };
//   const isValidRoute = tag.length === 2 && /^\d+$/.test(tag[1]);

//   if (!isValidRoute) return redirect;

//   const [tagId, page] = tag;
//   const posts = getSortedPosts(['frontMatter']);
//   const selectedPosts = posts.filter((post) => post.frontMatter.category.includes(tagId));
//   const pageIndex = Number(page) - 1;
//   const startIndex = pageIndex * POSTS_PER_PAGE;
//   const endIndex = (pageIndex + 1) * POSTS_PER_PAGE;
//   const totalPages = countTotalPages(selectedPosts, POSTS_PER_PAGE);

//   if (Number(page) > totalPages) return redirect;

//   return {
//     props: {
//       posts,
//       selectedPosts: selectedPosts.slice(startIndex, endIndex),
//       totalPages,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths<{ tag: string }> = async () => ({
//   paths: [],
//   fallback: 'blocking',
// });
