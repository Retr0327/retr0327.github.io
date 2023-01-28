import { memo } from 'react';
import { Prism } from '@mantine/prism';
import Mermaid from '@components/common/Mermaid';

function Pre(props: any) {
  const matches = (props.children.props.className || '').match(/language-(?<lang>.*)/);
  const isMermaid = matches[1] === 'mermaid';

  if (isMermaid) {
    return <Mermaid chart={props.children.props.children} />;
  }

  return (
    <Prism
      language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
      mb={20}
    >
      {props.children.props.children}
    </Prism>
  );
}

export default memo(Pre);
