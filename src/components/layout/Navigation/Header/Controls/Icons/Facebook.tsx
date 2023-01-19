import { memo } from 'react';
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
        backgroundColor: '#1778F2',
        borderColor: '#1778F2',
        ...theme.fn.hover({
          backgroundColor: theme.fn.lighten('#1778F2', 0.1),
        }),
      })}
    >
      <IconController control="facebook" size={22} />
    </ControlBase>
  );
}

export default memo(Facebook);
