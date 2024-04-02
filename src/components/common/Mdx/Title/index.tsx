import cx from 'clsx';
import { FOCUS_CLASS_NAMES, Title } from '@mantine/core';
import classes from './MdxTitle.module.css';

function MdxTitle({
  id,
  children,
  order = 2,
  ...rest
}: React.ComponentPropsWithoutRef<typeof Title>) {
  if (order === 1) {
    return (
      <Title className={classes.title} data-h1>
        {children}
      </Title>
    );
  }

  return (
    <>
      <div id={id} data-heading={children} data-order={order} className={classes.offset} />
      <Title order={order} className={classes.title} {...rest}>
        <a className={cx(classes.link, FOCUS_CLASS_NAMES.auto)} href={`#${id}`}>
          {children}
        </a>
      </Title>
    </>
  );
}

const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) => <MdxTitle order={order} {...props} />;

export default h;
