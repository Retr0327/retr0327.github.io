import Link from 'next/link';
import { Text } from '@mantine/core';
import { FooterLinksGroupProps } from 'types';
import classes from './FooterLinksGroup.module.css';

function FooterLinksGroup(props: FooterLinksGroupProps) {
  const { title, data } = props;
  const links = data.map((link, index) => (
    <Text
      className={classes.link}
      component={link.type === 'next' ? (Link as unknown as 'a') : 'a'}
      href={link.link}
      key={index}
    >
      {link.label}
    </Text>
  ));

  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>{title}</Text>
      {links}
    </div>
  );
}

export default FooterLinksGroup;
