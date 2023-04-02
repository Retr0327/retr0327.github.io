import { rem, Button } from '@mantine/core';
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
          border: rem(0),
          height: rem(42),
          paddingLeft: rem(20),
          paddingRight: rem(20),
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
