import { TimeLineProps } from '../types';

function filterPosts(posts: TimeLineProps['posts']) {
  const filteredPosts = posts.reduce((prev: { [key: string]: any }, cur) => {
    const temp = prev;
    const { frontMatter } = cur;
    const { createdAt, title, slug } = frontMatter;
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
      value.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    ])
    .sort((a, b) => b[0] - a[0]);
}

export default filterPosts;
