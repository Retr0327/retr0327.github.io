import Wordcloud from '@visx/wordcloud/lib/Wordcloud';
import { Text } from '@visx/text';
import { Route } from '@config';
import { useRouter } from 'next/navigation';
import { scaleLog } from '@visx/scale';
import { Stack } from '@mantine/core';
import { countWordFreq, WordData } from './utils';
import classes from './BlogTags.module.css';

interface BlogTagPageProps {
  tags: string[];
  showControls?: boolean;
}

const COLORS = ['#143059', '#2F6B9A', '#82a6c2'];

function BlogTagPage(props: BlogTagPageProps) {
  const words = countWordFreq(props.tags);
  const router = useRouter();
  const setFontSize = (datum: WordData) =>
    scaleLog({
      domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
      range: [10, 100],
    })(datum.value);

  return (
    <div className={classes.container}>
      <Stack align="center" gap={50}>
        <Wordcloud
          words={words}
          width={800}
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
                onClick={() => router.push(`${Route.Tags}/${encodeURI(word.text!)}?page=1`)}
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

export default BlogTagPage;
