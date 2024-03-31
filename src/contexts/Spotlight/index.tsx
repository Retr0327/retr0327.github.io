'use client';

import { useRouter } from 'next/navigation';
import { Route } from '@config';
import { IconSearch } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { createSpotlight, Spotlight } from '@mantine/spotlight';
import { useMdxMetadata } from '@contexts/Mdx';

interface SpotlightProviderProps {
  children: React.ReactNode;
}

export const [searchStore, searchHandlers] = createSpotlight();

function SpotlightProvider(props: SpotlightProviderProps) {
  const router = useRouter();
  const { children } = props;
  const metadata = useMdxMetadata();
  const actions: any[] = metadata.map((post) => ({
    id: post.slug,
    label: post.title,
    description: `發表於 ${post.createdAt}${
      post.updatedAt !== undefined ? ` | 更新於 ${post.updatedAt}` : ''
    } • 標籤：${post.category.join('、')}`,
    keywords: post.category,
    onClick: () => router.push(`${Route.BlogPost}/${post.slug}`),
  }));

  return (
    <>
      <Spotlight
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
      {children}
    </>
  );
}

export default SpotlightProvider;
