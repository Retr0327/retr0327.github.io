import Link from 'next/link';
import Route from '@config/routes';
import dynamic from 'next/dynamic';
import { memo, useMemo } from 'react';
import layoutConfig from '@config/layout';
import { Container, Text, Group, Avatar } from '@mantine/core';
import { links } from './LinksGroup';
import useStyles from './Footer.styles';

const LinksGroup = dynamic(() => import('./LinksGroup'));
const LinkedInButton = dynamic(() =>
  import('./SocialButtons').then((module) => module.LinkedInButton)
);
const GithubButton = dynamic(() => import('./SocialButtons').then((module) => module.GithubButton));

type Props = { withNavbar?: boolean };

function Footer(props: Props) {
  const { withNavbar } = props;
  const { classes, cx } = useStyles();
  const groups = useMemo(
    () =>
      links.map((group, index) => (
        <LinksGroup key={`${group.title}-${index}`} data={group.data} title={group.title} />
      )),
    [links]
  );

  return (
    <>
      <div className={classes.spacer} />
      <div className={cx(classes.wrapper, { [classes.withNavbar]: withNavbar })}>
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Group>
                <Link href={Route.home}>
                  <Avatar src={layoutConfig.avatar} radius={100} size={70} />
                </Link>
                <Text
                  component={Link}
                  href={Route.home}
                  ff="Monaco,Courier,monospace"
                  size="md"
                  weight={600}
                >
                  Lixing Yang
                </Text>
              </Group>
              <Text className={classes.description} size="sm">
                Professional TypeScript, Golang, and Python programmer wannabe.
              </Text>
            </div>

            <div className={classes.groups}>{groups}</div>
          </div>

          <div className={classes.afterFooter}>
            <Group position="apart">
              <Text size="xs" className={classes.afterFooterNote}>
                Built by{' '}
                <a href={`${layoutConfig.github.lixing}/retr0327.github.io`}>Lixing Yang</a>
              </Text>
              <div className={classes.social}>
                <LinkedInButton className={classes.socialButton} />
                <GithubButton className={classes.socialButton} ml="md" />
              </div>
            </Group>
          </div>
        </Container>
      </div>
    </>
  );
}

export default memo(Footer);
