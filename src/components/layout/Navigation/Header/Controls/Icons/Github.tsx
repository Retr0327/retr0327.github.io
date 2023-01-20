import { memo } from 'react';
import IconController from '@components/common/Icons';
import ControlBase from './Base';

interface GithubControlProps {
  link: string;
  tooltip: string;
}

function Github(props: GithubControlProps) {
  const { link, tooltip } = props;

  return (
    <ControlBase tooltip={tooltip} component="a" href={link}>
      <IconController control="github" size={22} />
    </ControlBase>
  );
}

export default memo(Github);
