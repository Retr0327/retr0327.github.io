import type { BoxProps } from '@mantine/core';

export interface HeaderControlProps extends BoxProps {
  tooltip: string;
  'aria-label'?: string;
  children: React.ReactNode;
}
