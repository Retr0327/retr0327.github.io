import { memo, ReactNode } from 'react';
import { Frontmatter } from 'types/blog';
import { IconSearch } from '@tabler/icons';
import { NextRouter, useRouter } from 'next/router';
import { SpotlightProvider as MantineSpotlightProvider, SpotlightAction } from '@mantine/spotlight';

type Props = {
  posts: { frontMatter: Frontmatter }[];
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
    >
      {children}
    </MantineSpotlightProvider>
  );
}

export default memo(SpotlightProvider);
