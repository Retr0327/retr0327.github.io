import type { BoxProps, ElementProps } from '@mantine/core';
import { Icon123 } from '@tabler/icons-react';

export interface LinkData {
  type: 'link' | 'next';
  label: string;
  link: string;
}

export interface NavbarData extends LinkData {
  icon: typeof Icon123;
  count?: number;
}

export interface FooterLinksGroupProps {
  title: string;
  data: LinkData[];
}

export interface IconProps extends BoxProps, ElementProps<'svg', 'display' | 'opacity'> {
  size?: number | string;
}

export type IconControllerProps =
  | ({ control: 'sun' } & IconProps)
  | ({ control: 'moon' } & IconProps)
  | ({ control: 'github' } & IconProps)
  | ({ control: 'animated-github' } & IconProps)
  | ({ control: 'facebook' } & IconProps)
  | ({ control: 'animated-facebook' } & IconProps)
  | ({ control: 'linkedin' } & IconProps)
  | ({ control: 'animated-linkedin' } & IconProps);
