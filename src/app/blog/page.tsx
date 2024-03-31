'use client';

import BlogGallery from '@components/pages/Blog/Gallery';
import { Suspense } from 'react';

function BlogPage() {
  return (
    <Suspense>
      <BlogGallery />
    </Suspense>
  );
}

export default BlogPage;
