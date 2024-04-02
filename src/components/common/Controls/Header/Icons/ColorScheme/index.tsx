'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { HeaderControl } from '../Base';
import classes from './ColorSchemeControl.module.css';

function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <HeaderControl
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      tooltip={`${computedColorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </HeaderControl>
  );
}

export default ColorSchemeControl;
