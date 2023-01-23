import Head from 'next/head';
import NextImage from 'next/image';
import { Prism } from '@mantine/prism';
import { Text, Code } from '@mantine/core';
import Table from './Table';
import Image from './Image';
import MdxTitle from './Title';

const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) => <MdxTitle order={order} {...props} />;

export const components = {
  Head,
  NextImage,
  table: Table,
  img: Image,
  h1: h(1),
  h2: h(2),
  h3: h(3),
  h4: h(4),
  h5: h(5),
  h6: h(6),
  code: (props: any) => <Code {...props} />,
  p: (props: any) => {
    const isImg =
      props.children && typeof props.children.props === 'object' && 'src' in props.children.props;
    if (isImg) return <div {...props} style={{ lineHeight: 1.55 }} />;
    return <p {...props} style={{ lineHeight: 1.55 }} />;
  },
  ul: (props: any) => (
    <ul {...props} style={{ lineHeight: 1.65, marginBottom: 20, marginTop: 10 }} />
  ),
  li: (props: any) => <li {...props} style={{ marginTop: 4 }} />,
  a: (props: any) => {
    const style = { fontSize: 15 };
    return (
      <Text style={style} component="a" variant="link" href={props.href}>
        {props.children}
      </Text>
    );
  },
  pre: (props: any) => {
    const matches = (props.children.props.className || '').match(/language-(?<lang>.*)/);
    return (
      <Prism
        language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
        mb={20}
      >
        {props.children.props.children}
      </Prism>
    );
  },
};
