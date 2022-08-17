import type { NextPage } from "next";
import { ColorSchemeToggle } from "@components";

const Home: NextPage = () => {
  return (
    <>
      <ColorSchemeToggle />
      This is homepage
    </>
  );
};

export default Home;
