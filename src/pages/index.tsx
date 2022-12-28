import Footer from "components/layout/Footer";
import About from "components/pages/home/About";
import Hero from "components/pages/home/Hero";
import NewsLetter from "components/pages/home/NewsLetter";
import OurBlogs from "components/pages/home/OurBlogs";
import Popular from "components/pages/home/Popular";
import OurService from "components/pages/home/Service";
import Testimonial from "components/pages/home/Testimonial";
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
      <OurService />
      <About />
      <Popular />
      <Testimonial />
      <NewsLetter heading="" message="" />
      <OurBlogs />
      <Footer />
    </div>
  );
};

export default Home;
