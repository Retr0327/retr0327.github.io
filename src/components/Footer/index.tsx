import Link from 'next/link';
import cx from 'clsx';
import { Href, Route } from '@config';
import { Container, Text, Group, Box, RemoveScroll, Avatar } from '@mantine/core';
import { useMemo } from 'react';
import classes from './Footer.module.css';
import LinksGroup, { links } from './LinksGroup';
import { GithubButton, LinkedInButton } from './SocialButtons';

interface FooterProps {
  withNavbar?: boolean;
}

function Footer({ withNavbar }: FooterProps) {
  const groups = useMemo(
    () =>
      links.map((group, index) => (
        <LinksGroup key={`${group.title}-${index}`} data={group.data} title={group.title} />
      )),
    [links]
  );

  return (
    <div className={classes.root}>
      <div className={classes.spacer} />
      <Box
        mod={{ 'with-navbar': withNavbar }}
        className={cx(classes.wrapper, RemoveScroll.classNames.fullWidth)}
      >
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Group>
                <Link href={Route.Home}>
                  <Avatar src={Href.Avatar} radius={100} size={70} />
                </Link>
                <Text
                  component={Link}
                  href={Route.Home}
                  ff="Monaco,Courier,monospace"
                  size="md"
                  fw={600}
                >
                  Lixing Yang
                </Text>
              </Group>
              <Text className={classes.description} fz="sm">
                Professional TypeScript, Golang, and Python programmer wannabe.{' '}
              </Text>
            </div>
            <div className={classes.groups}>{groups}</div>
          </div>

          <div className={classes.afterFooter}>
            <Group justify="space-between" wrap="wrap">
              <Text fz="xs" className={classes.afterFooterNote}>
                Built by <a href={Href.Github.Lixing}>Lixing Yang</a>
              </Text>
              <div className={classes.social}>
                <LinkedInButton className={classes.socialButton} />
                <GithubButton className={classes.socialButton} />
              </div>
            </Group>
          </div>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;
