import { IconSearch } from '@tabler/icons-react';
import cx from 'clsx';
import { BoxProps, ElementProps, Group, rem, Text, UnstyledButton } from '@mantine/core';
import { searchHandlers } from '@contexts/Spotlight';
import classes from './SearchControl.module.css';

interface SearchControlProps extends BoxProps, ElementProps<'button'> {}

function SearchControl(props: SearchControlProps) {
  const { className, ...rest } = props;

  return (
    <UnstyledButton {...rest} onClick={searchHandlers.open} className={cx(classes.root, className)}>
      <Group gap="xs">
        <IconSearch style={{ width: rem(15), height: rem(15) }} stroke={1.5} />
        <Text fz="sm" c="dimmed" pr={80}>
          Search
        </Text>
        <Text fw={700} className={classes.shortcut}>
          Ctrl + K
        </Text>
      </Group>
    </UnstyledButton>
  );
}

export default SearchControl;
