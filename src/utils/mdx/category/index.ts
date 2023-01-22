import { Frontmatter } from 'types/blog';

type Posts = {
  frontMatter: Frontmatter;
}[];

function countCategories(posts: Posts) {
  return posts.reduce((acc: { [key: string]: number }, curr) => {
    curr.frontMatter.category.forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});
}

export default countCategories;
