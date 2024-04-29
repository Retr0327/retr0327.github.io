'use client';

import { IconInfoCircle } from '@tabler/icons-react';
import cx from 'clsx';
import { Blockquote, BlockquoteProps, rgba, useMantineTheme } from '@mantine/core';
import classes from './MdxInfo.module.css';

const CITE_MATCH = /\[(.*?)\]/;
const SQUARE_BRACKET = /\[.*?\]/;

function getCite(content: string) {
  const citeResult = content.match(CITE_MATCH);
  return citeResult !== null && citeResult[1];
}

function MdxBlockquote(props: BlockquoteProps) {
  const { className, children, ...rest } = props;
  const theme = useMantineTheme();
  const blockProps = children as (string | any)[];
  const content = blockProps[1].props.children;
  const cite = getCite(content);

  return (
    <Blockquote
      className={cx(classes.root, className)}
      icon={<IconInfoCircle className={classes.icon} />}
      cite={cite ? `– ${cite}` : undefined}
      radius="md"
      __vars={{
        '--docs-bq-code-bg-light': rgba(theme.colors.blue[6], 0.2),
        '--docs-bq-code-bg-dark': rgba(theme.colors.blue[4], 0.2),
      }}
      {...rest}
    >
      {content.replace(SQUARE_BRACKET, '')}
    </Blockquote>
  );
}

export default MdxBlockquote;
