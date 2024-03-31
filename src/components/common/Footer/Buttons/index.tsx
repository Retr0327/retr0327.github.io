import React from 'react';
import { Href } from '@config/index';
import cx from 'clsx';
import IconController from '@components/common/Icons';
import { BoxProps, Button, ElementProps } from '@mantine/core';
import classes from './SocialButton.module.css';

interface SocialButtonProps extends BoxProps, ElementProps<'a', 'type'> {
  icon?: React.ReactNode;
}

function SocialButton(props: SocialButtonProps) {
  const { icon, ...rest } = props;
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      leftSection={icon}
      radius="md"
      classNames={{
        root: classes.socialButton,
        section: classes.socialButtonSection,
      }}
      {...rest}
    />
  );
}

function LinkedInButton(props: SocialButtonProps) {
  const { className, ...rest } = props;
  return (
    <SocialButton
      className={cx(classes.linkedInButton, className)}
      icon={<IconController control="linkedin" size={16} />}
      href={Href.Linkedin}
      {...rest}
    >
      Follow me on LinkedIn
    </SocialButton>
  );
}

function GithubButton(props: SocialButtonProps) {
  const { className, ...rest } = props;
  return (
    <SocialButton
      className={cx(classes.githubButton, className)}
      icon={<IconController control="github" size={16} />}
      href={Href.Github.Lixing}
      {...rest}
    >
      Follow me on Github
    </SocialButton>
  );
}

export { LinkedInButton, GithubButton };
