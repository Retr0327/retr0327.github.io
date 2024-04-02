'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { IconList } from '@tabler/icons-react';
import { Box, rem, ScrollArea, Text } from '@mantine/core';
import classes from './TableOfContents.module.css';
import { getHeadings, Heading } from './get-headings';
import { getActiveElement } from './active-element';

function MdxTableOfContents() {
  const [active, setActive] = useState(0);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const headingsRef = useRef<Heading[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const filteredHeadings = headings.filter((heading) => heading.depth > 1);

  const handleScroll = () => {
    setActive(
      getActiveElement(headingsRef.current.map((d) => d.getNode().getBoundingClientRect()))
    );
  };

  useEffect(() => {
    const _headings = getHeadings();
    headingsRef.current = _headings;
    setHeadings(_headings);
    setActive(getActiveElement(_headings.map((d) => d.getNode().getBoundingClientRect())));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (filteredHeadings.length === 0) {
    return null;
  }

  const items = filteredHeadings.map((heading, index) => {
    if (['參考資料', 'References', 'Footnotes'].includes(heading.content)) {
      return null;
    }
    return (
      <Text<'a'>
        key={heading.id}
        component="a"
        fz="sm"
        className={classes.link}
        mod={{ active: active === index }}
        href={`#${heading.id}`}
        __vars={{ '--toc-link-offset': `${heading.depth - 1}` }}
        onClick={(event) => {
          event.preventDefault();
          router.replace(`${pathname}#${heading.id}`);
        }}
      >
        {heading.content}
      </Text>
    );
  });

  return (
    <Box component="nav" className={classes.wrapper}>
      <div className={classes.inner}>
        <div>
          <div className={classes.header}>
            <IconList style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            <Text className={classes.title}>Table of contents</Text>
          </div>
          <ScrollArea.Autosize mah={`calc(100vh - ${rem(140)})`} type="never" offsetScrollbars>
            <div className={classes.items}>{items}</div>
          </ScrollArea.Autosize>
        </div>
      </div>
    </Box>
  );
}

export default MdxTableOfContents;
