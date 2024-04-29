import { IconSearch } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { HeaderControl } from '../Base';

interface SearchMobileControlProps {
  onSearch: () => void;
}

function SearchMobileControl(props: SearchMobileControlProps) {
  const { onSearch } = props;
  return (
    <HeaderControl onClick={() => onSearch()} tooltip="Search">
      <IconSearch style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
    </HeaderControl>
  );
}

export default SearchMobileControl;
