import { useRouter } from 'next/navigation';
import { Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Route } from '@config';
import { useMdxData } from '@contexts/mdx-data';
import { scaleLog } from '@visx/scale';
import { Text } from '@visx/text';
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';
import { countWordFreq, WordData } from './utils';
import classes from './BlogTags.module.css';

const COLORS = ['#143059', '#2F6B9A', '#82a6c2'];

function WordCloud() {
  const { mdx } = useMdxData();
  const matches = useMediaQuery('(max-width: 47.5em)');
  const words = countWordFreq(mdx.categories);
  const router = useRouter();
  const setFontSize = (datum: WordData) =>
    scaleLog({
      domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
      range: [10, 100],
    })(datum.value);

  const width = matches ? 400 : 800;

  return (
    <div className={classes.container}>
      <Stack align="center">
        <Wordcloud
          words={words}
          width={width}
          height={400}
          fontSize={setFontSize}
          font="Impact"
          padding={2}
          spiral="archimedean"
          rotate={0}
          random={() => 0.5}
        >
          {(cloudWords) =>
            cloudWords.map((word, index) => (
              <Text
                key={`${word.text}-${index}`}
                fill={COLORS[index % COLORS.length]}
                textAnchor="middle"
                transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`}
                fontSize={word.size}
                fontFamily={word.font}
                className={classes.cloudWord}
                onClick={() => router.push(`${Route.Tags}/?tag=${encodeURI(word.text!)}&page=1`)}
              >
                {word.text}
              </Text>
            ))
          }
        </Wordcloud>
      </Stack>
    </div>
  );
}

export default WordCloud;
