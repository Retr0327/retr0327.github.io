import { useRouter, usePathname } from 'next/navigation';
import { Pagination as MantinePagination } from '@mantine/core';

interface PaginationProps {
  total: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

function Pagination(props: PaginationProps) {
  const { total, defaultValue = 1, onChange } = props;
  const router = useRouter();
  const pathname = usePathname();

  const handleChange =
    onChange !== undefined
      ? onChange
      : (value: number) => {
          const prev = `${pathname}?page=${defaultValue}`;
          const next = `${pathname}?page=${value}`;
          if (prev === next) return undefined;
          return router.push(next);
        };

  return (
    <MantinePagination
      total={total}
      defaultValue={defaultValue}
      withEdges
      size="md"
      onChange={handleChange}
    />
  );
}

export default Pagination;
