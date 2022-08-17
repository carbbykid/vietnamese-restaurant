import Hero from "components/page/home/Hero";
import Product from "components/page/home/Product";
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
      <Hero
        heading="The future of tech is here"
        message="Holisticly incentivize revolutionary collaboration and idea sharing
        before cost effective users. Actual focused services before highly
        efficient human capital."
      />
      <Product />
    </div>
  );
};

export default Home;
