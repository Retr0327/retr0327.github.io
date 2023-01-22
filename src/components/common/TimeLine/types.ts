import { BlogGalleryProps } from 'types/blog';

export type TimeLineProps = Pick<BlogGalleryProps, 'posts'>;

export type FilterPosts = [string, { date: string; title: string; slug: string }[]][];
