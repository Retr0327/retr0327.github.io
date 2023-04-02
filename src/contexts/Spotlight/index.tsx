import { rem, em } from '@mantine/core';
import { FrontMatterProps } from 'types/blog';
import { useMediaQuery } from '@mantine/hooks';
import { memo, useMemo, ReactNode } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { NextRouter, useRouter } from 'next/router';
import { SpotlightProvider as MantineSpotlightProvider, SpotlightAction } from '@mantine/spotlight';

type Props = {
  posts: FrontMatterProps[];
  children: ReactNode;
};

function createActions(
  posts: Pick<Props, 'posts'>['posts'],
  router: NextRouter
): SpotlightAction[] {
  return posts.map(({ frontMatter }) => ({
    title: frontMatter.title,
    description: `發表於 ${frontMatter.createdAt}${
      frontMatter.updatedAt !== undefined ? ` | 更新於 ${frontMatter.updatedAt}` : ''
    } • 標籤：${frontMatter.category.join('、')}`,
    keywords: frontMatter.category,
    onTrigger: () => router.push(frontMatter.slug),
  }));
}

function SpotlightProvider(props: Props) {
  const { posts, children } = props;
  const router = useRouter();
  const smallScreen = useMediaQuery(`(max-width: ${em(485)})`);
  const actions = useMemo(() => createActions(posts, router), [posts, router, router.pathname]);

  return (
    <MantineSpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Search posts"
      shortcut={['mod + K']}
      highlightQuery
      transitionProps={{
        duration: 150,
        transition: {
          in: { transform: 'translateY(0)', opacity: 1 },
          out: { transform: `translateY(-${rem(20)})`, opacity: 0 },
          transitionProperty: 'transform, opacity',
        },
      }}
      limit={5}
      nothingFoundMessage="Nothing found..."
      style={{ maxWidth: smallScreen ? rem(350) : rem(600) }}
    >
      {children}
    </MantineSpotlightProvider>
  );
}

export default memo(SpotlightProvider);
