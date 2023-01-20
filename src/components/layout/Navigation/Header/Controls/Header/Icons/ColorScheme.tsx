import { memo, useMemo } from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { IconSunHigh, IconMoon } from '@tabler/icons';
import ControlBase from './Base';

function ColorScheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const icon = useMemo(
    () =>
      isDark ? (
        <IconSunHigh style={{ width: 18, height: 18 }} />
      ) : (
        <IconMoon style={{ width: 18, height: 18 }} />
      ),
    [isDark]
  );

  return (
    <ControlBase
      onClick={() => toggleColorScheme()}
      tooltip={`${colorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
    >
      {icon}
    </ControlBase>
  );
}

export default memo(ColorScheme);
