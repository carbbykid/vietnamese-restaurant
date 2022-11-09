import GenerateProductInCart from "components/page/cart/GenerateProductInCart";
import NewsLetter from "components/page/home/NewsLetter";
import HeroShop from "components/page/shop/HeroShop";
import { NextPage } from "next";
import Head from "next/head";

const CartPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cart - ChiPo</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroShop product="My Cart" />
      <GenerateProductInCart />
      {/* <Products heading="Products list" /> */}

      <NewsLetter
        heading="NEWSLETTER"
        message="Subscribe to our product newsletter to get notified when we launch the product or when we completed a milestone."
      />
    </div>
  );
};

export default CartPage;
