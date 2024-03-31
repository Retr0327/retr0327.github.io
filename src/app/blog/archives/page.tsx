'use client';

import BlogArchives from '@components/pages/Blog/Archives';
import { Suspense } from 'react';

function BlogArchivesPage() {
  // const page = Number(useSearchParams().get('page') || 1);
  // const metadata = useMdxMetadata();
  // const { selectedMetadata, totalPages } = pickMetadata(
  //   metadata,
  //   page,
  //   ARCHIVES_PER_PAGE,
  //   Route.Archives
  // );

  return (
    // <BlogArchives metadata={selectedMetadata} paginationNumber={totalPages} currentPage={page} />
    <Suspense>
      <BlogArchives />
    </Suspense>
  );
}

export default BlogArchivesPage;
