import cx from 'clsx';
import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSunHigh, IconMoon } from '@tabler/icons-react';
import ControlBase from '../Base';
import classes from './ColorSchemeControl.module.css';

function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ControlBase
      className={classes.control}
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      tooltip={`${computedColorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
      aria-label="color-scheme-control"
    >
      <IconSunHigh className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ControlBase>
  );
}

export default ColorSchemeControl;
