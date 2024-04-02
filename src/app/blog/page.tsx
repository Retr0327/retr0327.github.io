'use client';

import { Suspense } from 'react';
import { Loader } from '@mantine/core';
import BlogGallery from '@components/pages/Blog/Gallery';

function BlogPage() {
  return (
    <Suspense fallback={<Loader />}>
      <BlogGallery />
    </Suspense>
  );
}

export default BlogPage;
