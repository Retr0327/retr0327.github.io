import React, { memo, useMemo } from 'react';
import Slugger from 'github-slugger';
import { IconList } from '@tabler/icons';
import { BlogPostProps } from 'types/blog';
import { Text, ScrollArea, useMantineTheme } from '@mantine/core';
import useStyles from './TableOfContents.styles';

type TableOfContentsProps = {
  headings: BlogPostProps['post']['headings'];
};

function TableOfContents(props: TableOfContentsProps) {
  const { headings } = props;
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const slugger = new Slugger();
  const filteredHeadings = headings.filter((heading) => heading.depth > 1);

  if (filteredHeadings.length === 0) {
    return null;
  }

  const items = useMemo(
    () =>
      filteredHeadings.map((heading, index) => {
        if (heading.value === '參考資料' || heading.value === 'References') {
          return null;
        }
        const slug = slugger.slug(heading.value);
        return (
          <Text<'a'>
            key={`${slug}-${index}`}
            component="a"
            size="sm"
            className={classes.link}
            href={`#${slug}`}
            sx={{ paddingLeft: (heading.depth - 1) * theme.spacing.lg }}
            onClick={async (event) => {
              event.preventDefault();
              document.querySelector(`#${CSS.escape(slug)}`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }}
          >
            {heading.value}
          </Text>
        );
      }),
    [filteredHeadings]
  );

  return (
    <nav className={cx(classes.wrapper)}>
      <div className={classes.inner}>
        <div>
          <div className={classes.header}>
            <IconList size={20} stroke={1.5} />
            <Text className={classes.title}>Table of contents</Text>
          </div>
          <ScrollArea.Autosize maxHeight="calc(100vh - 140px)" type="scroll" offsetScrollbars>
            <div className={classes.items}>{items}</div>
          </ScrollArea.Autosize>
        </div>
      </div>
    </nav>
  );
}

export default memo(TableOfContents);
