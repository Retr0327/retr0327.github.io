import { IconProps } from 'types';
import { Box, rem } from '@mantine/core';

function AnimatedFacebookIcon(props: IconProps) {
  const { size, style, ...rest } = props;
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      style={[{ width: rem(size), height: rem(size) }, style]}
      viewBox="0 0 24 24"
      {...rest}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4">
        <path strokeDasharray="24" strokeDashoffset="24" d="M17 4L15 4C12.5 4 11 5.5 11 8V20">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="24;0"
          >
          </animate>
        </path>
        <path strokeDasharray="12" strokeDashoffset="12" d="M8 12H15">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.2s"
            values="12;0"
          >
          </animate>
        </path>
      </g>
    </Box>
  );
}

export default AnimatedFacebookIcon;
