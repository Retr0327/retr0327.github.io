import { BlogPostProps } from 'types/blog';
import { SimpleGrid } from '@mantine/core';
import MdxSibling from './MdxSibling';

interface MdxSiblingsProps {
  siblings: BlogPostProps['siblings'];
}

function MdxSiblings(props: MdxSiblingsProps) {
  const { siblings } = props;

  return (
    <SimpleGrid mt={40} cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
      {siblings.prev && <MdxSibling type="prev" data={siblings.prev} />}
      {siblings.next && <MdxSibling type="next" data={siblings.next} />}
    </SimpleGrid>
  );
}

export default MdxSiblings;
