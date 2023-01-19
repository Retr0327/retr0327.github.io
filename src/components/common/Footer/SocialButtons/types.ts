import React from 'react';
import { DefaultProps } from '@mantine/core';

export interface SocialButtonProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, 'type'> {
  icon?: React.ReactNode;
}
