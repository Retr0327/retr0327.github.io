import layoutConfig from '@config/layout';
import { packSx } from '@mantine/utils';
import IconController from '@components/common/Icons';
import ButtonBase from './Base';
import { SocialButtonProps } from './types';

function LinkedInButton(props: SocialButtonProps) {
  const { sx, ...others } = props;

  return (
    <ButtonBase
      sx={[
        (theme) => ({
          backgroundColor: layoutConfig.linkedin.color,
          ...theme.fn.hover({
            backgroundColor: theme.fn.lighten(layoutConfig.linkedin.color, 0.1),
          }),
        }),
        ...packSx(sx),
      ]}
      icon={<IconController control="linkedin" size={16} />}
      href={layoutConfig.linkedin.link}
      {...others}
    >
      Follow me on LinkedIn
    </ButtonBase>
  );
}

function GithubButton(props: SocialButtonProps) {
  const { sx, ...others } = props;

  return (
    <ButtonBase
      sx={[
        (theme) => ({
          backgroundColor: '#000',
          ...theme.fn.hover({
            backgroundColor: theme.fn.lighten('#000', theme.colorScheme === 'dark' ? 0.05 : 0.1),
          }),
        }),
        ...packSx(sx),
      ]}
      icon={<IconController control="github" size={16} />}
      href={layoutConfig.github.lixing}
      {...others}
    >
      Follow me on Github
    </ButtonBase>
  );
}

export { LinkedInButton, GithubButton };
