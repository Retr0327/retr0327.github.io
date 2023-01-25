import { memo } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { Pagination as MantinePagination, PaginationProps } from '@mantine/core';

type Props = Pick<PaginationProps, 'total'>;

function usePaginationSize() {
  const miniScreen = useMediaQuery('(max-width: 400px)');
  const smallScreen = useMediaQuery('(max-width: 485px)');
  return miniScreen ? 'xs' : smallScreen ? 'sm' : 'md';
}

function Pagination(props: Props) {
  const { total } = props;
  const router = useRouter();
  const size = usePaginationSize();
  const route = router.pathname.replace(/^\/([^/]*).*$/, '$1');

  return (
    <MantinePagination
      total={total}
      initialPage={1}
      withEdges
      size={size}
      onChange={(value) => {
        const pushURL = `/${route}/${value}`;
        if (router.asPath === pushURL) return undefined;
        return router.push(pushURL);
      }}
    />
  );
}

export default memo(Pagination);
