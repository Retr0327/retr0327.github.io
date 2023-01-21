import { memo } from 'react';
import layoutConfig from '@config/layout';
import IconController from '@components/common/Icons';
import ControlBase from './Base';

interface FacebookControlProps {
  link: string;
}

function Facebook(props: FacebookControlProps) {
  const { link } = props;

  return (
    <ControlBase
      tooltip="Facebook"
      component="a"
      href={link}
      sx={(theme) => ({
        color: theme.white,
        backgroundColor: layoutConfig.facebook.color,
        borderColor: layoutConfig.facebook.color,
        ...theme.fn.hover({
          backgroundColor: theme.fn.lighten(layoutConfig.facebook.color, 0.1),
        }),
      })}
    >
      <IconController control="facebook" size={22} />
    </ControlBase>
  );
}

export default memo(Facebook);
