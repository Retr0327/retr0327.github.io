import { Frontmatter } from 'types/blog';

function countTotalPages(source: any[], postsPerPage: number) {
  return Math.ceil(source.length / postsPerPage);
}

function countCategories(
  posts: {
    frontMatter: Frontmatter;
  }[]
) {
  return posts.reduce((acc: { [key: string]: number }, curr) => {
    curr.frontMatter.category.forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});
}

export { countTotalPages, countCategories };
