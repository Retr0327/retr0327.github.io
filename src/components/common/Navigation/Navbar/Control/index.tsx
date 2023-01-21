import { memo } from 'react';
import { IconSearch } from '@tabler/icons';
import { UnstyledButton, Text, Group, DefaultProps } from '@mantine/core';
import useStyles from './SearchControl.styles';

interface SearchControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  onClick(): void;
}

function SearchControl(props: SearchControlProps) {
  const { className, ...searchProps } = props;
  const { classes, cx } = useStyles();

  return (
    <UnstyledButton {...searchProps} className={cx(classes.root, className)}>
      <Group spacing="xs">
        <IconSearch size={14} stroke={1.5} />
        <Text size="sm" color="dimmed" pr={80}>
          Search
        </Text>
      </Group>
    </UnstyledButton>
  );
}

export default memo(SearchControl);
