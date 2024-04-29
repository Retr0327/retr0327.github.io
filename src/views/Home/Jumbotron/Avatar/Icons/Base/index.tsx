import { ActionIcon, Tooltip, ActionIconProps, createPolymorphicComponent } from '@mantine/core';

interface ActionIconBaseProps extends ActionIconProps {
  tooltip: string;
  href: string;
  children: React.ReactNode;
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
