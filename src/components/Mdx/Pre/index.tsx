import { CodeHighlight } from '@mantine/code-highlight';
import { getLanguage, getCode } from './utils';
import classes from './MdxPre.module.css';

interface MdxPreProps {
  children?: React.ReactNode;
}

function MdxPre({ children }: MdxPreProps) {
  const language = getLanguage(children);
  const code = getCode(children);
  return (
    <CodeHighlight
      withCopyButton={false}
      code={code}
      language={language}
      className={classes.code}
    />
  );
}

export default MdxPre;
