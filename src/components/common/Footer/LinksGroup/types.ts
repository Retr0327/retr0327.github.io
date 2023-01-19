export interface LinksGroupProps {
  title: string;
  data: {
    link: string;
    label: string;
    isNewTab?: boolean;
  }[];
}
