import Collection from "components/page/home/Collection";
import Hero from "components/page/home/Hero";
import HowItWork from "components/page/home/HowItWork";
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
      <Product
        heading="THE PRODUCT"
        message="Introduce the product here. A small description about what it is and how
        it helps the user. You can also add some photos below."
      />
      <HowItWork
        heading="HOW IT WORKS"
        message="Everybody loves tech gadgets, But our’s is different. Here is how it
        works. Its should be simple. Add how easy is to install your product"
      />
      <Collection heading="" message="" />
    </div>
  );
};

export default Home;
