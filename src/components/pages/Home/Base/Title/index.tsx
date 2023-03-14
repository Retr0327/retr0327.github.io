import useStyles from './Title.styles';

type Props = React.ComponentProps<'h1'>;

function SectionTitle(props: Props) {
  const { children, className, ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <h2 className={cx(classes.title, classes.default, className)} {...rest}>
      {children}
    </h2>
  );
}

export default SectionTitle;
