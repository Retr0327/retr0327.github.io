'use client';

import { DetailedHTMLProps, ReactElement, TableHTMLAttributes } from 'react';
import { ScrollArea, Table } from '@mantine/core';
import classes from './MdxTable.module.css';

type MdxTableProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;

type THead = ReactElement<{
  children: ReactElement<{ children: ReactElement[] }>;
}>;

type TBody = ReactElement<{
  children: ReactElement<{
    children: ReactElement[];
  }>[];
}>;

function MdxTable(props: MdxTableProps) {
  const { children } = props;
  const [thead, tbody] = children as [THead, TBody];

  const th = thead.props.children.props.children.map((item, index) => (
    <Table.Th key={`${index}-${item.props.children}`}>{item.props.children}</Table.Th>
  ));

  const tb = tbody.props.children.map((item, trIndex) => (
    <Table.Tr key={trIndex}>
      {item.props.children.map((td, tdIndex) => (
        <Table.Td key={`${tdIndex}-${td.props.children}`}>{td.props.children}</Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    <ScrollArea type="scroll">
      <Table withTableBorder withColumnBorders className={classes.table}>
        <Table.Thead>
          <Table.Tr>{th}</Table.Tr>
        </Table.Thead>
        <Table.Tbody>{tb}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}

export default MdxTable;
