import { Button } from '@mantine/core';
import { SocialButtonProps } from './types';

function ButtonBase(props: SocialButtonProps) {
  const { icon, ...others } = props;

  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      leftIcon={icon}
      styles={(theme) => ({
        root: {
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,
        },
        leftIcon: {
          marginRight: theme.spacing.md,
        },
      })}
      {...others}
    />
  );
}

export default ButtonBase;
