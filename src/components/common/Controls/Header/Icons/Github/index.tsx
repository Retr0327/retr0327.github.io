import IconController from '@components/common/Icons';
import { HeaderControl } from '../Base';
import classes from './GithubControl.module.css';

interface GithubControlProps {
  link: string;
}

function GithubControl(props: GithubControlProps) {
  const { link } = props;
  return (
    <HeaderControl tooltip="Github" component="a" href={link} className={classes.github}>
      <IconController control="github" size={22} />
    </HeaderControl>
  );
}

export default GithubControl;
