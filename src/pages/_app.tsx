import "../styles/globals.css";
import { AppProps } from "next/app";
import { getCookie } from "cookies-next";
import { ColorScheme } from "@mantine/core";
import { GetServerSidePropsContext } from "next";
import DarkModeContext from "@contexts/DarkModeContext";

type CustomAppProps = AppProps & { colorScheme: ColorScheme };

function App(props: CustomAppProps) {
  const { Component, pageProps, colorScheme } = props;

  return (
    <DarkModeContext colorScheme={colorScheme}>
      <Component {...pageProps} />;
    </DarkModeContext>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export default App;
