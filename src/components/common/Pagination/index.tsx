import { memo } from 'react';
import { useRouter } from 'next/router';
import { getRouteFromPathname } from '@utils';
import { useMediaQuery } from '@mantine/hooks';
import { Pagination as MantinePagination, PaginationProps } from '@mantine/core';

type Props = Pick<PaginationProps, 'total'> & { onChange?: (value: number) => void };

function usePaginationSize() {
  const miniScreen = useMediaQuery('(max-width: 400px)');
  const smallScreen = useMediaQuery('(max-width: 485px)');
  return miniScreen ? 'xs' : smallScreen ? 'sm' : 'md';
}

function Pagination(props: Props) {
  const { total, onChange } = props;
  const router = useRouter();
  const size = usePaginationSize();

  const handleChange =
    onChange !== undefined
      ? onChange
      : (value: number) => {
          const route = getRouteFromPathname(router.pathname);
          const pushURL = `/${route}/${value}`;
          if (router.asPath === pushURL) return undefined;
          return router.push(pushURL);
        };

  return (
    <MantinePagination
      total={total}
      initialPage={1}
      withEdges
      size={size}
      onChange={handleChange}
    />
  );
}

export default memo(Pagination);
