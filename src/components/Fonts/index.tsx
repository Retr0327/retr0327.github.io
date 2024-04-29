'use client';

import Head from 'next/head';
import { DEFAULT_THEME } from '@mantine/core';
import greycliffCF from './GreycliffCF';

function FontsStyle() {
  return (
    <Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{ --font-primary: ${greycliffCF.style.fontFamily}, ${DEFAULT_THEME.fontFamily}; }`,
        }}
      />
    </Head>
  );
}

export default FontsStyle;
