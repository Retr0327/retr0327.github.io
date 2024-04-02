'use client';

import Link from 'next/link';
import { Space, Text, Avatar, Timeline } from '@mantine/core';
import { EXPERIENCES } from '@config/experiences';
import PageSection from '../Base';

function Experiences() {
  const items = EXPERIENCES.map((experience, index) => (
    <Timeline.Item
      key={`${experience.company}-${index}`}
      title={
        <Text ml={10} fw={600}>
          {experience.title}
        </Text>
      }
      bullet={
        <Link href={experience.url} target="_blank" rel="noopener noreferrer">
          <Avatar size={45} ml={1} mt={16} radius="xl" src={experience.image} />
        </Link>
      }
    >
      <Text ml={10}>{experience.company}</Text>
      <Text c="dimmed" ml={10} mt={5}>
        {experience.start} - {experience.end || 'Present'}
      </Text>
    </Timeline.Item>
  ));

  return (
    <PageSection title="Experiences">
      <Space h="md" />
      <Timeline bulletSize={30}>{items}</Timeline>
      <Space h={120} />
    </PageSection>
  );
}

export default Experiences;
