import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductDetail from "./ProductDetail";
const Collection = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  return (
    <div className="bg-white pb-[160px] pt-[110px]">
      <div className="wrap-content">
        <div className="mb-[50px]">
          <h2 className="text-xl font-bold tracking-tighter mb-[20px] sm:text-5xl text-center text-chipo-heading">
            {heading}
          </h2>
          <div className="message">{message}</div>
          <hr className="divider" />
        </div>

        <div className="py-[15px]">
          <Swiper
            navigation
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            slidesPerView={4}
            pagination={{ clickable: true }}
            className="swiper_custom"
          >
            {mockData.map((product, idx) => (
              <SwiperSlide key={idx}>
                <ProductDetail product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Collection;

const mockData = [
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-1",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-2",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-2",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-3",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-4",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg",
    alt: "collection-5",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg",
    alt: "collection-6",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg",
    alt: "collection-7",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
  {
    src: "https://demo.web3canvas.com/themeforest/proland/images/collection-4.jpg",
    alt: "collection-8",
    name: "Connect Device",
    desc: "The FirstWatch ever released",
    price: "100$",
  },
];
