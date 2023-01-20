import { memo } from 'react';
import layoutConfig from '@config/layout';
import IconController from '@components/common/Icons';
import ControlBase from './Base';

interface LinkedInControlProps {
  link: string;
}

function LinkedIn(props: LinkedInControlProps) {
  const { link } = props;

  return (
    <ControlBase
      tooltip="LinkedIn"
      component="a"
      href={link}
      sx={(theme) => ({
        color: theme.white,
        backgroundColor: layoutConfig.linkedin.color,
        borderColor: layoutConfig.linkedin.color,
        ...theme.fn.hover({
          backgroundColor: theme.fn.lighten(layoutConfig.linkedin.color, 0.1),
        }),
      })}
    >
      <IconController control="linkedin" size={20} />
    </ControlBase>
  );
}

export default memo(LinkedIn);
