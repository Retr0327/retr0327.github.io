import { memo } from 'react';
import { Blockquote as MantineBlockquote } from '@mantine/core';

type Props = { children: ['\n', { [key: string]: any }, '\n'] };

const CITE_MATCH = /\[(.*?)\]/;
const SQUARE_BRACKET = /\[.*?\]/;

function getCite(content: string) {
  const citeResult = content.match(CITE_MATCH);
  return citeResult !== null && citeResult[1];
}

function Blockquote(props: Props) {
  const { children } = props;
  const content = children[1].props.children as string;
  const cite = getCite(content);

  return (
    <MantineBlockquote cite={cite ? `– ${cite}` : undefined}>
      {content.replace(SQUARE_BRACKET, '')}
    </MantineBlockquote>
  );
}

export default memo(Blockquote);
