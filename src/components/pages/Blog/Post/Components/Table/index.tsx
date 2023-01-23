import { memo } from 'react';
import { ScrollArea, Table as MantineTable } from '@mantine/core';

function Table(props: any) {
  return (
    <ScrollArea type="scroll">
      <MantineTable
        withBorder
        withColumnBorders
        {...props}
        sx={(theme) => ({
          width: '50%',

          [theme.fn.smallerThan('sm')]: {
            width: '100%',
          },
        })}
      />
    </ScrollArea>
  );
}

export default memo(Table);
