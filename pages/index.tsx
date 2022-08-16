import Hero from "components/page/home/Hero";
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
        heading="Capture Photography"
        message="I capture moments in nature and keep them alive."
      />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi
        reiciendis laboriosam at, consectetur minus quaerat repudiandae suscipit
        iusto, nam tempora illum aperiam delectus, et a magnam? Reiciendis,
        facilis perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dicta quasi reiciendis laboriosam at, consectetur minus quaerat
        repudiandae suscipit iusto, nam tempora illum aperiam delectus, et a
        magnam? Reiciendis, facilis perspiciatis! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dicta quasi reiciendis laboriosam at,
        consectetur minus quaerat repudiandae suscipit iusto, nam tempora illum
        aperiam delectus, et a magnam? Reiciendis, facilis perspiciatis! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi
        reiciendis laboriosam at, consectetur minus quaerat repudiandae suscipit
        iusto, nam tempora illum aperiam delectus, et a magnam? Reiciendis,
        facilis perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dicta quasi reiciendis laboriosam at, consectetur minus quaerat
        repudiandae suscipit iusto, nam tempora illum aperiam delectus, et a
        magnam? Reiciendis, facilis perspiciatis!
      </div>
    </div>
  );
};

export default Home;
