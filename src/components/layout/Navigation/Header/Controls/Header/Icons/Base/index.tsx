import { createPolymorphicComponent } from '@mantine/utils';
import { UnstyledButton, Tooltip, DefaultProps } from '@mantine/core';
import useStyles from './ControlBase.styles';

interface ControlBaseProps extends DefaultProps {
  tooltip: string;
  children: React.ReactNode;
}

function _ControlBase({ tooltip, className, ...others }: ControlBaseProps) {
  const { classes, cx } = useStyles();

  return (
    <Tooltip label={tooltip}>
      <UnstyledButton className={cx(classes.control, className)} {...others} />
    </Tooltip>
  );
}

const ControlBase = createPolymorphicComponent<'button', ControlBaseProps>(_ControlBase);

export default ControlBase;
