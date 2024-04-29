import { IconProps } from 'types';
import { Box, rem } from '@mantine/core';

function AnimatedLinkedInIcon(props: IconProps) {
  const { size, style, ...rest } = props;
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      style={[{ width: rem(size), height: rem(size) }, style]}
      viewBox="0 0 24 24"
      {...rest}
    >
      <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0">
        <animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1"></animate>
      </circle>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4">
        <path strokeDasharray="12" strokeDashoffset="12" d="M4 10V20">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="12;0"
          >
          </animate>
        </path>
        <path strokeDasharray="12" strokeDashoffset="12" d="M10 10V20">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.2s"
            values="12;0"
          >
          </animate>
        </path>
        <path
          strokeDasharray="24"
          strokeDashoffset="24"
          d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.5s"
            values="24;0"
          >
          </animate>
        </path>
      </g>
    </Box>
  );
}

export default AnimatedLinkedInIcon;
