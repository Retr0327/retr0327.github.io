import IconController from '@components/common/Icons';
import { HeaderControl } from '../Base';
import classes from './FacebookControl.module.css';

interface FacebookControlProps {
  link: string;
}

function FacebookControl(props: FacebookControlProps) {
  const { link } = props;
  return (
    <HeaderControl tooltip="Facebook" component="a" href={link} className={classes.facebook}>
      <IconController control="facebook" size={22} />
    </HeaderControl>
  );
}

export default FacebookControl;
