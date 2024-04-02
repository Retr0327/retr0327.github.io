import fs from 'fs';
import path from 'path';
import { PostMetadataType } from 'types/mdx';

const POSTS_PATH = path.join(process.cwd(), 'src/app/blog/p');
const POST_FOLDERS = fs.readdirSync(POSTS_PATH).filter((file) => file);

async function getPostsMetadata() {
  const posts: PostMetadataType[] = [];
  for (const folder of POST_FOLDERS) {
    const { metadata } = await import(`src/app/blog/p/${folder}/page.mdx`);
    posts.push(metadata);
  }

  return posts.sort(
    (a, b) =>
      new Date(b.updatedAt || b.createdAt).getTime() -
      new Date(a.updatedAt || a.createdAt).getTime()
  );
}

export { POSTS_PATH, POST_FOLDERS, getPostsMetadata };
