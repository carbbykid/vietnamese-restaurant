import NewsLetter from "components/page/home/NewsLetter";
import type { NextPage } from "next";
import Head from "next/head";
import HeroShop from "components/page/shop/HeroShop";

import ProductList from "components/page/shop/ProductList";
import { useRouter } from "next/router";
import { useMemo } from "react";
import ProductDetail from "components/page/product/ProductDetail";

const Detail: NextPage = () => {
  const router = useRouter();

  const productId = useMemo(() => {
    return router.query.id;
  }, [router.query.id as string]);

  return (
    <div>
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroShop product="Product Detail" />
      <ProductDetail productId={productId as string} />

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

export default Detail;
