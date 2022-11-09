import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import type { AppProps } from "next/app";
import "assets/styles/global.scss";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Provider>
    </>
  );
}

export default MyApp;
