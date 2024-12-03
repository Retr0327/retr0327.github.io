'use client';

import { useRouter } from 'next/navigation';
import { rem } from '@mantine/core';
import { createSpotlight, Spotlight as MantineSpotlight } from '@mantine/spotlight';
import { Route } from '@config';
import { useMdxData } from '@hooks/use-mdx-data';
import { IconSearch } from '@tabler/icons-react';

export const [searchStore, searchHandlers] = createSpotlight();

function Spotlight() {
  const router = useRouter();
  const { mdx } = useMdxData();
  const actions: any[] = mdx.metadata.map((post) => ({
    id: post.slug,
    label: post.title,
    description: `發表於 ${post.createdAt}${
      post.updatedAt !== undefined ? ` | 更新於 ${post.updatedAt}` : ''
    } • 標籤：${post.category.join('、')}`,
    keywords: post.category,
    onClick: () => router.push(`${Route.BlogPost}/${post.slug}`),
  }));

  return (
    <MantineSpotlight
      store={searchStore}
      shortcut={['mod + K', 'mod + P', '/']}
      actions={actions}
      tagsToIgnore={[]}
      highlightQuery
      clearQueryOnClose
      radius="md"
      limit={7}
      nothingFound="Nothing found..."
      searchProps={{
        leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} />,
        placeholder: 'Search documentation...',
      }}
    />
  );
}

export default Spotlight;
