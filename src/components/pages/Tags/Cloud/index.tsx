import Link from 'next/link';
import Route from '@config/routes';
import { Text } from '@mantine/core';
import { memo, useMemo } from 'react';
import { TagCloud as ReactTagCloud } from 'react-tagcloud';

type Props = { data: { [key: string]: number } };

const customRenderer = (tag: { value: string; count: number; rank: number }, size: number) => (
  <Text
    key={tag.value}
    component={Link}
    href={`${Route.tags}/tag?id=${tag.value}${encodeURI('&')}page=1`}
    p={3}
    size={size}
    sx={(theme) => ({
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[tag.rank]
          : theme.colors.dark[9 - tag.rank],
      '&:hover': {
        textDecoration: 'underline',
      },
    })}
  >
    {tag.value}
  </Text>
);

function TagCloud(props: Props) {
  const { data } = props;
  const tags = useMemo(
    () =>
      Object.entries(data)
        .sort((a, b) => b[1] - a[1])
        .reduce((acc: { [key: string]: any }[], [value, count], index) => {
          const last = acc[acc.length - 1];
          const rank = last && last.count === count ? last.rank : index + 1;
          acc.push({ value, count, rank });
          return acc;
        }, []),
    [data]
  );

  return <ReactTagCloud minSize={12} maxSize={35} tags={tags} renderer={customRenderer} />;
}

export default memo(TagCloud);
