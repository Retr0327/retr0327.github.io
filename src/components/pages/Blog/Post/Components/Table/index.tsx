import { memo } from 'react';
import { ScrollArea, Table as MantineTable } from '@mantine/core';

function Table(props: any) {
  return (
    <ScrollArea type="scroll">
      <MantineTable withBorder withColumnBorders {...props} sx={{ width: '50%' }} />
    </ScrollArea>
  );
}

export default memo(Table);
