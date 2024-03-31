'use client';

import { useMdxMetadata } from '@contexts/Mdx';
import BlogTagPage from '@components/pages/Blog/Tags';

function BlogTagsPage() {
  const metadata = useMdxMetadata();
  const tags = metadata.reduce((acc: string[], curr) => {
    curr.category.forEach((category) => {
      acc.push(category);
    });
    return acc;
  }, []);

  return <BlogTagPage tags={tags} />;
}

export default BlogTagsPage;
