import Pagination from "components/common/Pagination";
import Products from "components/page/shop/Products";
import Contact from "components/page/home/Contact";
import NewsLetter from "components/page/home/NewsLetter";
import type { NextPage } from "next";
import Head from "next/head";
import HeroShop from "components/page/shop/HeroShop";

import ProductList from "components/page/shop/ProductList";

const Shop: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroShop product="Products" />
      {/* <Products heading="Products list" /> */}
      <ProductList />

      <NewsLetter
        heading="NEWSLETTER"
        message="Subscribe to our product newsletter to get notified when we launch the product or when we completed a milestone."
      />
      {/* <Contact
        formTitle="GET IN TOUCH"
        email="carbbykid@gmail.com"
        firstPhoneNumber="0975113113"
        secondPhoneNumber="0975114114"
        address="523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA"
      /> */}
    </div>
  );
};

export default Shop;
