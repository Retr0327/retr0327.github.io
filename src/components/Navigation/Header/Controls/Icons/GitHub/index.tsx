import IconController from '@components/Icons';
import ControlBase from '../Base';
import classes from './GitHub.module.css';

interface GithubControlProps {
  link: string;
}

function GitHub(props: GithubControlProps) {
  const { link } = props;

  return (
    <ControlBase className={classes.control} tooltip="GitHub" component="a" href={link}>
      <IconController control="github" size={22} />
    </ControlBase>
  );
}

export default GitHub;
