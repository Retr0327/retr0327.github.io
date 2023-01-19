import { memo } from 'react';
import { IconControllerProps } from 'types';
import GithubIcon from './Github';
import FacebookIcon from './Facebook';

function IconController(props: IconControllerProps) {
  const { control, ...rest } = props;

  switch (control) {
    case 'facebook':
      return <FacebookIcon {...rest} />;
    case 'github':
      return <GithubIcon {...rest} />;
    default:
      return null;
  }
}

export default memo(IconController);
