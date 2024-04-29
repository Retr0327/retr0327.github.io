import IconController from '@components/Icons';
import { HeaderControl } from '../Base';
import classes from './LinkedInControl.module.css';

interface LinkedInControlProps {
  link: string;
}

function LinkedInControl(props: LinkedInControlProps) {
  const { link } = props;
  return (
    <HeaderControl tooltip="LinkedIn" component="a" href={link} className={classes.linkedin}>
      <IconController control="animated-linkedin" size={20} />
    </HeaderControl>
  );
}

export default LinkedInControl;
