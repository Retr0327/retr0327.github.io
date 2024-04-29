import { PostMetadataType } from 'types/mdx';

type GroupResult = Pick<PostMetadataType, 'slug' | 'title'> & { date: string };

function groupByYear(metadata: PostMetadataType[]) {
  const filteredPosts = metadata.reduce((prev: { [key: string]: GroupResult[] }, cur) => {
    const temp = prev;
    const { slug, title, createdAt } = cur;
    const year = createdAt.substring(0, 4);
    const dateString = createdAt.substring(5);
    if (!temp[year]) {
      temp[year] = [];
    }
    temp[year].push({ date: dateString, title, slug });
    return temp;
  }, {});

  return Object.entries(filteredPosts)
    .map(([key, value]) => [
      key,
      value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    ])
    .sort((a, b) => Number(b[0]) - Number(a[0]));
}

export default groupByYear;
