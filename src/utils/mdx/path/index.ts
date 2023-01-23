import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Fields = 'slug' | 'frontMatter' | 'content';

const POSTS_PATH = path.join(process.cwd(), 'src/posts');
const TOTAL_POSTS = fs.readdirSync(POSTS_PATH).filter((file) => /\.mdx?$/.test(file));

function countTotalPages(source: any[], postsPerPage: number) {
  return Math.ceil(source.length / postsPerPage);
}

function getPosts(fields: Fields[] = []) {
  const posts = TOTAL_POSTS.map((filename) => ({
    filename,
  }));

  return posts.map(({ filename }) => {
    const filePath = path.join(POSTS_PATH, filename);
    const source = fs.readFileSync(filePath);
    const { data, content } = matter(source);
    const slug = filename.replace('.mdx', '');

    const output: { [key: string]: any } = {};
    if (fields.includes('slug')) {
      output.slug = slug;
    }
    if (fields.includes('frontMatter')) {
      output.frontMatter = data;
    }
    if (fields.includes('content')) {
      output.content = content;
    }

    return output;
  });
}

function getSortedPosts(fields: Fields[]) {
  const posts = getPosts(fields);
  return posts.sort(
    (a, b) =>
      new Date(b.frontMatter.updatedAt || b.frontMatter.createdAt).getTime() -
      new Date(a.frontMatter.updatedAt || a.frontMatter.createdAt).getTime()
  );
}

export { countTotalPages, getSortedPosts, getPosts, POSTS_PATH, TOTAL_POSTS };
