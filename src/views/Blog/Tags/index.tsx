import { useSearchParams, redirect } from 'next/navigation';
import BlogTagArchives from './Archives';
import WordCloud from './WordCloud';

function BlogTagPage() {
  const tag = useSearchParams().get('tag');
  const page = useSearchParams().get('page');

  if (tag === null && page === null) {
    return <WordCloud />;
  }

  if (tag === null) {
    return redirect('/404');
  }

  const tagPage = page === null ? 1 : Number(page);
  return <BlogTagArchives tag={tag} page={tagPage} />;
}

export default BlogTagPage;
