import cx from 'clsx';
import { createPolymorphicComponent, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './HeaderControl.module.css';
import type { HeaderControlProps } from './types';

function _HeaderControl(props: HeaderControlProps) {
  const { tooltip, className, 'aria-label': label, ...rest } = props;

  return (
    <Tooltip label={tooltip}>
      <UnstyledButton
        className={cx(classes.control, className)}
        aria-label={label || tooltip}
        {...rest}
      />
    </Tooltip>
  );
}

const HeaderControl = createPolymorphicComponent<'button', HeaderControlProps>(_HeaderControl);

export { HeaderControl, HeaderControlProps };
