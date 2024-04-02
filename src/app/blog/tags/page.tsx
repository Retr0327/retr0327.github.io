'use client';

import { Suspense } from 'react';
import { Loader } from '@mantine/core';
import BlogTagPage from '@components/pages/Blog/Tags';

function BlogTagsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <BlogTagPage />
    </Suspense>
  );
}

export default BlogTagsPage;
