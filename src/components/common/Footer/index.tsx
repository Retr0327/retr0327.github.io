import React from 'react';
import cx from 'clsx';
import { Avatar, Box, Container, Group, RemoveScroll, Text } from '@mantine/core';
import Link from 'next/link';
import { Href, Route } from '@config/index';
import { FOOTER_LINKS_DATA } from '@config/links';
import { GithubButton, LinkedInButton } from './Buttons';
import FooterLinksGroup from './LinksGroup';
import classes from './Footer.module.css';

interface FooterProps {
  withNavbar?: boolean;
}

function Footer({ withNavbar }: FooterProps) {
  const linksGroup = FOOTER_LINKS_DATA.map((group) => (
    <FooterLinksGroup data={group.data} title={group.title} key={group.title} />
  ));

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
                Professional TypeScript, Golang, and Python programmer wannabe.
              </Text>
            </div>

            <div className={classes.groups}>{linksGroup}</div>
          </div>

          <div className={classes.afterFooter}>
            <Group justify="space-between" wrap="wrap">
              <Text fz="xs" className={classes.afterFooterNote}>
                Built by <a href={`${Href.Github.Lixing}/retr0327.github.io`}>Lixing Yang</a>
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
