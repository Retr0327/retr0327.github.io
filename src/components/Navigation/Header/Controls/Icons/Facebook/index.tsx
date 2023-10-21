import IconController from '@components/Icons';
import ControlBase from '../Base';
import classes from './Facebook.module.css';

interface FacebookControlProps {
  link: string;
}

function Facebook(props: FacebookControlProps) {
  const { link } = props;

  return (
    <ControlBase tooltip="Facebook" component="a" href={link} className={classes.facebookButton}>
      <IconController control="facebook" size={22} />
    </ControlBase>
  );
}

export default Facebook;
