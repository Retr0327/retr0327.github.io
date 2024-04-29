import { BoxProps, Group, Tooltip } from '@mantine/core';
import { Href } from '@config';
import SearchButton from '@components/SearchButton';
import { ColorSchemeControl, FacebookControl, GithubControl, LinkedInControl } from './Icons';

interface HeaderControlsProps extends BoxProps {
  onSearch: () => void;
  withGithub?: boolean;
  withFacebook?: boolean;
  withLinkedIn?: boolean;
  withColorScheme?: boolean;
}

function HeaderControls(props: HeaderControlsProps) {
  const {
    onSearch,
    withGithub = true,
    withFacebook = true,
    withLinkedIn = true,
    withColorScheme = true,
    ...rest
  } = props;
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group gap="xs" {...rest}>
        <SearchButton onClick={onSearch} />
        {withLinkedIn && <LinkedInControl link={Href.Linkedin} />}
        {withFacebook && <FacebookControl link={Href.Facebook} />}
        {withGithub && <GithubControl link={Href.Github.Lixing} />}
        {withColorScheme && <ColorSchemeControl />}
      </Group>
    </Tooltip.Group>
  );
}

export default HeaderControls;
