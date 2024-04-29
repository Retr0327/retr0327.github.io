import { IconProps } from 'types';
import { Box, rem } from '@mantine/core';

function MoonIcon(props: IconProps) {
  const { size, style, ...rest } = props;

  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={[{ width: rem(size), height: rem(size) }, style]}
      {...rest}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g strokeDasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;2"
            >
            </animate>
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            >
            </animate>
          </path>
        </g>
        <path
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity="0"
        >
          <set attributeName="opacity" begin="0.5s" to="1"></set>
        </path>
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="4"
        strokeDashoffset="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
          <animate
            id="lineMdSunnyOutlineToMoonAltLoopTransition0"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+6s"
            dur="0.4s"
            values="4;0"
          >
          </animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+4s"
            dur="0.4s"
            values="4;0"
          >
          </animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+3.2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+5.2s"
            dur="0.4s"
            values="0;4"
          >
          </animate>
          <set
            attributeName="d"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+1.8s"
            to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
          >
          </set>
          <set
            attributeName="d"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+3.8s"
            to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
          >
          </set>
          <set
            attributeName="d"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+5.8s"
            to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
          >
          </set>
        </path>
        <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
          <animate
            id="lineMdSunnyOutlineToMoonAltLoopTransition1"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+6s"
            dur="0.4s"
            values="4;0"
          >
          </animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+4s"
            dur="0.4s"
            values="4;0"
          >
          </animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+3.2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+5.2s"
            dur="0.4s"
            values="0;4"
          >
          </animate>
          <set
            attributeName="d"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+1.8s"
            to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
          >
          </set>
          <set
            attributeName="d"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+3.8s"
            to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
          >
          </set>
          <set
            attributeName="d"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+5.8s"
            to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
          >
          </set>
        </path>
        <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
          <animate
            id="lineMdSunnyOutlineToMoonAltLoopTransition2"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="2.8s;lineMdSunnyOutlineToMoonAltLoopTransition2.begin+6s"
            dur="0.4s"
            values="4;0"
          >
          </animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+2s"
            dur="0.4s"
            values="4;0"
          >
          </animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition2.begin+3.2s"
            dur="0.4s"
            values="0;4"
          >
          </animate>
          <set
            attributeName="d"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+1.8s"
            to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
          >
          </set>
          <set
            attributeName="d"
            begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+5.8s"
            to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
          >
          </set>
        </path>
      </g>
      <mask id="lineMdSunnyOutlineToMoonAltLoopTransition3">
        <circle cx="12" cy="12" r="12" fill="#fff"></circle>
        <circle cx="12" cy="12" r="4">
          <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="4;8"></animate>
        </circle>
        <circle cx="22" cy="2" r="3" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          >
          </animate>
          <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6"></animate>
          <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12"></animate>
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          >
          </animate>
          <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6"></animate>
          <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10"></animate>
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        mask="url(#lineMdSunnyOutlineToMoonAltLoopTransition3)"
      >
        <set attributeName="opacity" begin="0.5s" to="0"></set>
        <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10"></animate>
      </circle>
    </Box>
  );
}

export default MoonIcon;
