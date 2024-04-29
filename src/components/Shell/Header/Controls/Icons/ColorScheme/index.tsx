'use client';

import cx from 'clsx';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import IconController from '@components/Icons';
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
      <IconController control="sun" className={cx(classes.icon, classes.light)} size={22} />
      <IconController control="moon" className={cx(classes.icon, classes.dark)} size={22} />
    </HeaderControl>
  );
}

export default ColorSchemeControl;
