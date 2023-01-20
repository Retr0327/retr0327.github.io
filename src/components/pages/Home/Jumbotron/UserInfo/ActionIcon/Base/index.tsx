import { ReactNode } from 'react';
import { ActionIcon, Tooltip, DefaultProps, createPolymorphicComponent } from '@mantine/core';

interface ActionIconBaseProps extends DefaultProps {
  tooltip: string;
  href: string;
  children: ReactNode;
}

function _ActionIconBase(props: ActionIconBaseProps) {
  const { tooltip, href, className, ...actionIconProps } = props;

  return (
    <Tooltip label={tooltip} position="bottom">
      <ActionIcon
        className={className}
        variant="default"
        radius="md"
        size={36}
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...actionIconProps}
      />
    </Tooltip>
  );
}

const ActionIconBase = createPolymorphicComponent<'button', ActionIconBaseProps>(_ActionIconBase);

export default ActionIconBase;
