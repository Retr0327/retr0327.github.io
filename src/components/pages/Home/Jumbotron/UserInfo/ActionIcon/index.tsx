import layoutConfig from '@config/layout';
import IconController from '@components/common/Icons';
import { IconBook2, IconMail } from '@tabler/icons-react';
import ActionIconBase from './Base';

function Github() {
  return (
    <ActionIconBase tooltip="Github" href={layoutConfig.github.lixing}>
      <IconController size={18} control="github" />
    </ActionIconBase>
  );
}

function LinkedIn() {
  return (
    <ActionIconBase
      tooltip="LinkedIn"
      href={layoutConfig.linkedin.link}
      sx={(theme) => ({
        color: theme.white,
        backgroundColor: layoutConfig.linkedin.color,
        borderColor: layoutConfig.linkedin.color,
        ...theme.fn.hover({
          backgroundColor: theme.fn.lighten(layoutConfig.linkedin.color, 0.1),
        }),
      })}
    >
      <IconController size={18} control="linkedin" />
    </ActionIconBase>
  );
}

function Email() {
  return (
    <ActionIconBase
      tooltip="Email"
      href="mailto:lixingyang.dev@gmail.com"
      sx={(theme) => ({
        color: theme.white,
        backgroundImage: 'linear-gradient(45deg, #fd7e14 0%, #fa5252 100%)',
      })}
    >
      <IconMail size={20} />
    </ActionIconBase>
  );
}

function CV() {
  return (
    <ActionIconBase
      tooltip="CV"
      href={layoutConfig.cv}
      sx={(theme) => ({
        color: theme.white,
        backgroundImage: 'linear-gradient(60deg, #12b886 0%, #228be6 100%)',
      })}
    >
      <IconBook2 size={20} />
    </ActionIconBase>
  );
}

export { Github, LinkedIn, Email, CV };
