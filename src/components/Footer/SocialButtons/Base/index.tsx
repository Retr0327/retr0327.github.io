import { Button } from '@mantine/core';
import { SocialButtonProps } from './types';
import classes from './Base.module.css';

function ButtonBase(props: SocialButtonProps) {
  const { icon, ...others } = props;

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
      {...others}
    />
  );
}

export default ButtonBase;
