import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import type { AppProps } from "next/app";
import "assets/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
