'use client';

import BlogTagArchives from '@components/pages/Blog/Tags/Archives';
import { Suspense } from 'react';

function BlogTagPage() {
  return (
    <Suspense>
      <BlogTagArchives />
    </Suspense>
  );
}

export default BlogTagPage;
