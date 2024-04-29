'use client';

import { Suspense } from 'react';
import { Loader } from '@mantine/core';
import BlogArchives from '@views/Blog/Archives';

function BlogArchivesPage() {
  return (
    <Suspense fallback={<Loader />}>
      <BlogArchives />
    </Suspense>
  );
}

export default BlogArchivesPage;
