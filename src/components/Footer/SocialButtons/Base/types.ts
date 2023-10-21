import { BoxProps, ElementProps } from '@mantine/core';

export interface SocialButtonProps extends BoxProps, ElementProps<'a', 'type'> {
  icon?: React.ReactNode;
}
