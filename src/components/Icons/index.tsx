import { IconControllerProps } from 'types';
import GithubIcon from './Github';
import LinkedInIcon from './LinkedIn';
import FacebookIcon from './Facebook';
import AnimatedFacebookIcon from './AnimatedFacebook';
import AnimatedLinkedInIcon from './AnimatedLinkedIn';
import AnimatedGithubIcon from './AnimatedGithub';
import MoonIcon from './Moon';
import SunIcon from './Sun';

function IconController(props: IconControllerProps) {
  const { control, ...rest } = props;

  switch (control) {
    case 'facebook':
      return <FacebookIcon {...rest} />;
    case 'animated-facebook':
      return <AnimatedFacebookIcon {...rest} />;
    case 'github':
      return <GithubIcon {...rest} />;
    case 'linkedin':
      return <LinkedInIcon {...rest} />;
    case 'animated-linkedin':
      return <AnimatedLinkedInIcon {...rest} />;
    case 'animated-github':
      return <AnimatedGithubIcon {...rest} />;
    case 'moon':
      return <MoonIcon {...rest} />;
    case 'sun':
      return <SunIcon {...rest} />;
    default:
      throw new Error('Invalid control');
  }
}

export default IconController;
