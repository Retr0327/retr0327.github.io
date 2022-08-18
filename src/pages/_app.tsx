import "../styles/globals.css";
import { AppProps } from "next/app";
import Navbar from "@components/Navbar";
import DarkModeContext from "@contexts/DarkModeContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeContext>
      <Navbar />
      <Component {...pageProps} />
    </DarkModeContext>
  );
}

export default App;
