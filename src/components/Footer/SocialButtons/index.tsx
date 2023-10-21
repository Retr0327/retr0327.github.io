import IconController from '@components/Icons';
import { Href } from '@config';
import cx from 'clsx';
import ButtonBase from './Base';
import { SocialButtonProps } from './Base/types';
import classes from './SocialButtons.module.css';

export function LinkedInButton(props: SocialButtonProps) {
  const { className, ...others } = props;
  return (
    <ButtonBase
      className={cx(classes.linkedinButton, className)}
      icon={<IconController control="linkedin" size={16} />}
      href={Href.Linkedin}
      {...others}
    >
      Follow me on LinkedIn
    </ButtonBase>
  );
}

export function GithubButton(props: SocialButtonProps) {
  const { className, ...others } = props;
  return (
    <ButtonBase
      className={cx(classes.githubButton, className)}
      icon={<IconController control="github" size={16} />}
      href={Href.Github.Lixing}
      {...others}
    >
      Follow me on Github
    </ButtonBase>
  );
}
