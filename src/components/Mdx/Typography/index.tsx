import React from 'react';
import cx from 'clsx';
import { Code } from '@mantine/core';
import classes from './MdxTypography.module.css';

function MdxParagraph(props: React.ComponentPropsWithoutRef<'p'>) {
  const { className, ...rest } = props;
  return <p className={cx(classes.paragraph, className)} {...rest} />;
}

function MdxUl({ className, ...rest }: React.ComponentPropsWithoutRef<'ul'>) {
  return <ul className={cx(classes.ul, className)} {...rest} />;
}

function MdxLi({ className, ...rest }: React.ComponentPropsWithoutRef<'li'>) {
  return <li className={cx(classes.li, className)} {...rest} />;
}

function MdxCode(props: React.ComponentPropsWithoutRef<'code'>) {
  return <Code {...props} />;
}

export { MdxParagraph, MdxUl, MdxLi, MdxCode };
