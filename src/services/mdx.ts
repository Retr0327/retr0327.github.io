import { promises as fs } from 'fs';
import path from 'path';
import { PostMetadataType } from 'types/mdx';

const POSTS_PATH = path.join(process.cwd(), 'src/app/blog/p');

export async function getPostsMetadata() {
  const postFolders = await fs.readdir(POSTS_PATH);
  const folders = postFolders.filter((file) => file);
  const posts: PostMetadataType[] = [];
  for (const folder of folders) {
    const { metadata } = await import(`src/app/blog/p/${folder}/page.mdx`);
    posts.push(metadata);
  }

  return posts.sort(
    (a, b) =>
      new Date(b.updatedAt || b.createdAt).getTime() -
      new Date(a.updatedAt || a.createdAt).getTime()
  );
}
