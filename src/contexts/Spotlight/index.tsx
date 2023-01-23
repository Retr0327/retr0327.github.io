import { memo, ReactNode } from 'react';
import { IconSearch } from '@tabler/icons';
import { FrontMatterProps } from 'types/blog';
import { useMediaQuery } from '@mantine/hooks';
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
  const actions = createActions(posts, router);
  const smallScreen = useMediaQuery('(max-width: 485px)');

  return (
    <MantineSpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Search posts"
      shortcut={['mod + K']}
      highlightQuery
      transition={{
        in: { transform: 'translateY(0)', opacity: 1 },
        out: { transform: 'translateY(-20px)', opacity: 0 },
        transitionProperty: 'transform, opacity',
      }}
      limit={5}
      nothingFoundMessage="Nothing found..."
      maxWidth={smallScreen ? 350 : 600}
    >
      {children}
    </MantineSpotlightProvider>
  );
}

export default memo(SpotlightProvider);
