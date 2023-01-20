import serializeConfig from '@config/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import { getSortedPosts } from '../path';

async function getHeadings(content: string) {
  const headingLines = content.split('\n').filter((line) => line.match(/^###*\s/));

  return headingLines.map((raw) => {
    const depth = raw.slice(0, 3) === '###' ? 3 : 2;
    const value = raw.replace(/^###*\s/, '');
    return { depth, value };
  });
}

async function createMdxElements(params: { slug: string }) {
  const posts = getSortedPosts();
  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === params.slug);
  const { frontMatter, content } = posts[postIndex];
  const nextPost = posts[postIndex + 1];
  const previousPost = posts[postIndex - 1];

  const [mdxSource, headings] = await Promise.all([
    await serialize(content, serializeConfig(frontMatter)),
    await getHeadings(content),
  ]);

  return {
    post: { source: mdxSource, headings },
    frontMatter,
    siblings: {
      next: nextPost === undefined ? null : nextPost.frontMatter,
      prev: previousPost === undefined ? null : previousPost.frontMatter,
    },
  };
}

export default createMdxElements;
