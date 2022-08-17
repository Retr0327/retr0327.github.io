import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from "@mantine/core";
import React from "react";
import { useState } from "react";
import { setCookie } from "cookies-next";

type DarkModeContextProps = {
  colorScheme: ColorScheme;
  children: React.ReactNode;
};

function DarkModeContext(props: DarkModeContextProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withNormalizeCSS
        withGlobalStyles
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default DarkModeContext;
