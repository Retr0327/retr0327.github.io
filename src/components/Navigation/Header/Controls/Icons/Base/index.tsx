import cx from 'clsx';
import { UnstyledButton, Tooltip, BoxProps, createPolymorphicComponent } from '@mantine/core';
import classes from './ControlBase.module.css';

interface ControlBaseProps extends BoxProps {
  tooltip: string;
  children: React.ReactNode;
}
function _ControlBase({ tooltip, className, ...others }: ControlBaseProps) {
  return (
    <Tooltip label={tooltip}>
      <UnstyledButton className={cx(classes.control, className)} aria-label={tooltip} {...others} />
    </Tooltip>
  );
}

const ControlBase = createPolymorphicComponent<'button', ControlBaseProps>(_ControlBase);

export default ControlBase;
