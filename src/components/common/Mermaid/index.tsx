import { useEffect } from 'react';
import mermaid, { MermaidConfig } from 'mermaid';
import { Box, useMantineColorScheme, useMantineTheme } from '@mantine/core';

type Props = { chart: string };

function Mermaid(props: Props) {
  const { chart } = props;
  const maintineTheme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'neutral';

  const config: MermaidConfig = {
    startOnLoad: true,
    theme,
    securityLevel: 'loose',
    arrowMarkerAbsolute: false,
    flowchart: {
      htmlLabels: true,
      curve: 'linear',
    },
    sequence: {
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 120,
      height: 30,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      mirrorActors: true,
      bottomMarginAdj: 1,
      useMaxWidth: true,
      rightAngles: false,
      showSequenceNumbers: false,
    },
    gantt: {
      titleTopMargin: 25,
      barHeight: 16,
      barGap: 4,
      topPadding: 50,
      leftPadding: 75,
      gridLineStartPadding: 35,
      fontSize: 11,
      numberSectionStyles: 4,
      axisFormat: '%Y-%m-%d',
    },
    fontFamily: `Greycliff CF, ${maintineTheme.fontFamily}`,
  };

  mermaid.initialize(config);

  useEffect(() => {
    mermaid.contentLoaded();
  }, [theme, colorScheme, config]);

  return <Box className="mermaid">{chart}</Box>;
}

export default Mermaid;
