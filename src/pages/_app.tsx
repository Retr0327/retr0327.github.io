import "../styles/globals.css";
import { AppProps } from "next/app";
import DarkModeContext from "@contexts/DarkModeContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeContext>
      <Component {...pageProps} />
    </DarkModeContext>
  );
}

export default App;
