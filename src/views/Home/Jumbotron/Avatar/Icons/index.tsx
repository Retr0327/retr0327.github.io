import IconController from '@components/Icons';
import { Href } from '@config/index';
import { IconBook2, IconMail } from '@tabler/icons-react';
import linkedInClasses from '@components/Shell/Header/Controls/Icons/LinkedIn/LinkedInControl.module.css';
import ActionIconBase from './Base';

function Github() {
  return (
    <ActionIconBase tooltip="Github" href={Href.Github.Lixing}>
      <IconController size={18} control="github" />
    </ActionIconBase>
  );
}

function LinkedIn() {
  return (
    <ActionIconBase tooltip="LinkedIn" href={Href.Linkedin} className={linkedInClasses.linkedin}>
      <IconController size={18} control="linkedin" />
    </ActionIconBase>
  );
}

function Email() {
  return (
    <ActionIconBase
      tooltip="Email"
      href="mailto:lixingyang.dev@gmail.com"
      style={{
        color: 'var(--mantine-color-white)',
        backgroundImage: 'linear-gradient(45deg, #fd7e14 0%, #fa5252 100%)',
      }}
    >
      <IconMail size={20} />
    </ActionIconBase>
  );
}

function CV() {
  return (
    <ActionIconBase
      tooltip="CV"
      href={Href.CV}
      style={{
        color: 'var(--mantine-color-white)',
        backgroundImage: 'linear-gradient(60deg, #12b886 0%, #228be6 100%)',
      }}
    >
      <IconBook2 size={20} />
    </ActionIconBase>
  );
}

export { Github, LinkedIn, Email, CV };
