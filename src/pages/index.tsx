import About from "components/pages/home/About";
import Hero from "components/pages/home/Hero";
import Popular from "components/pages/home/Popular";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Popular />
      <About />
    </div>
  );
};

export default Home;
