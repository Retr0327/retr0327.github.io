import cx from 'clsx';
import classes from './SectionTitle.module.css';

interface SectionTitleProps extends React.ComponentProps<'h1'> {
  type?: 'white' | 'default';
}

function SectionTitle(props: SectionTitleProps) {
  const { children, className, type = 'default', ...rest } = props;
  return (
    <h2 data-type={type} className={cx(classes.title, className)} {...rest}>
      {children}
    </h2>
  );
}

export default SectionTitle;
