import HeroShop from "components/pages/menu/HeroShop";
import ProductList from "components/pages/menu/ProductList";
import type { NextPage } from "next";
import Head from "next/head";

const Menu: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroShop product="Menu" />
      <ProductList />
    </div>
  );
};

export default Menu;
