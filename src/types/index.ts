import type { NextPage } from 'next';
import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { TablerIcon } from '@tabler/icons';

// -------- helpers --------

export type PickAsOrNull<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: T[P] | null;
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// -------- NextJs --------

export type PageControl<T = {}> = {
  Layout?: (props: { children?: ReactElement<T> }) => JSX.Element;
};

export type NextPageWithControl<P = {}, IP = P> = NextPage<P, IP> & { control?: PageControl<P> };

export type AppPropsWithControl<T = any> = AppProps & {
  Component: NextPageWithControl<T>;
};

// ---- miscellaneous ----

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

export type IconControllerProps =
  | ({ control: 'github' } & IconProps)
  | ({ control: 'facebook' } & IconProps)
  | ({ control: 'linkedin' } & IconProps);

export type LinkItem = {
  link: string;
  label: string;
};

export type MenuLink = PartialBy<LinkItem, 'link'> & { icon: TablerIcon };

export type NavLink = MenuLink & { count?: number };
