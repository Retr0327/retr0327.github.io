import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PER_PAGE = 8;
const POSTS_PATH = path.join(process.cwd(), 'src/posts');
const TOTAL_POSTS = fs.readdirSync(POSTS_PATH).filter((file) => /\.mdx?$/.test(file));

function countTotalPages() {
  return Math.ceil(TOTAL_POSTS.length / POSTS_PER_PAGE);
}

function getSortedPosts() {
  const posts = TOTAL_POSTS.map((filename) => ({
    filename,
  }));

  return posts
    .map(({ filename }) => {
      const filePath = path.join(POSTS_PATH, filename);
      const source = fs.readFileSync(filePath);
      const { data, content } = matter(source);
      const slug = filename.replace('.mdx', '');
      return { slug, frontMatter: data, content };
    })
    .sort(
      (a, b) =>
        new Date(b.frontMatter.updatedAt || b.frontMatter.createdAt).getTime() -
        new Date(a.frontMatter.updatedAt || a.frontMatter.createdAt).getTime()
    );
}

function getPostSlug() {
  const postsPath = fs.readdirSync(POSTS_PATH).filter((file) => /\.mdx?$/.test(file));

  return postsPath.map((filename) => {
    const [slug] = filename.split('.');
    return { params: { slug } };
  });
}

export { countTotalPages, getSortedPosts, getPostSlug, POSTS_PER_PAGE, POSTS_PATH };
