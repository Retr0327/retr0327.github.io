import { useMemo } from 'react';
import Link from 'next/link';
import layoutConfig from '@config/layout';
import { useMediaQuery } from '@mantine/hooks';
import { Space, Text, Avatar, Timeline } from '@mantine/core';
import PageSection from '../Base';

function Experience() {
  const smallScreen = useMediaQuery('(max-width: 485px)');
  const timelineItems = useMemo(
    () =>
      layoutConfig.experiences.map((experience, index) => (
        <Timeline.Item
          key={`${experience.company}-${index}`}
          title={<Text ml={10}>{experience.title}</Text>}
          bullet={
            <Link href={experience.url} target="_blank" rel="noopener noreferrer">
              <Avatar size={45} ml={1} mt={16} radius="xl" src={experience.image} />
            </Link>
          }
        >
          <Text ml={10}>{experience.company}</Text>
          <Text color="dimmed" ml={10} mt={5}>
            {experience.start} - {experience.end || 'Present'}
          </Text>
        </Timeline.Item>
      )),
    [layoutConfig.experiences]
  );

  return (
    <PageSection
      title="Experience"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      })}
    >
      {smallScreen ? <Space h="xl" /> : null}
      <Timeline bulletSize={30}>{timelineItems}</Timeline>
      <Space h="xl" />
    </PageSection>
  );
}

export default Experience;
