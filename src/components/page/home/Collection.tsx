import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Collection.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Collection = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  return (
    <div
      className={`bg-chipo-bg-second pb-[160px] pt-[110px] ${styles.component}`}
    >
      <div className="m-auto px-[15px] max-w-[1170px] wrap ">
        <h2 className="text-xl font-bold tracking-tighter mb-[20px] sm:text-5xl text-center text-chipo-heading">
          {heading}
        </h2>
        <div className="max-w-[100%] text-md py-1 text-center m-auto font-light tracking-wide sm:text-xl sm:py-2 sm:max-w-[60%] text-chipo-text">
          {message}
        </div>
        <Swiper
          navigation
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiper-custom"
        >
          {mockData.map((product) => (
            <SwiperSlide>
              <div className="auto text-center">
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-[262px] height-[262px] m-auto"
                />
                <div>{product.name}</div>
                <div>{product.desc}</div>
                <div>{product.price}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="mt-[90px] flex gap-[20px] justify-center">
          {mockData.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="h-[110px] relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="sm:w-[98px] sm:max-h-[110px] m-auto"
                />
                <FaChevronRight className="absolute top-[50%] right-[15px] text-2xl font-light" />
              </div>

              <div className="pt-[60px] pb-[8px] font-semibold sm:text-[26px] text-chipo-heading">
                {item.heading}
              </div>
              <p className="pb-[10px] text-chipo-text">{item.message}</p>
            </div>
          ))}
        </div> */}
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
