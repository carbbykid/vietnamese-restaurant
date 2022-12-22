import Image from "next/image";
import React from "react";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div className="pb-16 pt-14 relative">
      <div className="absolute bottom-2 -left-32">
        <Image src="/images/home/food-1.png" width={300} height={300} />
      </div>

      <div className="absolute top-10 -right-20">
        <Image src="/images/home/food-2.png" width={200} height={200} />
      </div>

      <div className="wrap-content max-w-5xl ">
        <h2 className="title text-center">Testimonial</h2>
        <h1 className="heading text-chipo-heading text-center">
          What our customer say about us
        </h1>

        <div className="pt-14">
          <Swiper
            navigation
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="swiper_custom"
            breakpoints={{
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              976: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
          >
            {mockData.map((customer, idx) => (
              <SwiperSlide key={idx}>
                <Avatar customer={customer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Avatar = ({ customer }: { customer: any }) => {
  return (
    <div className="text-center px-5 py-5 bg-chipo-text-dark border-chipo-text border drop-shadow-md rounded-lg">
      <Image
        src={customer.avatar}
        width={120}
        height={120}
        className="rounded-full"
      />
      <p className="text-sm mt-8 px-14">{customer.desc}</p>
      <div className="mt-2">
        <Star rating={customer.rating} />
      </div>

      <RiDoubleQuotesR className="text-4xl center-inline mt-8 text-[#5F9DF7]" />

      <div className="font-semibold text-lg mt-8">{customer.name}</div>
      <div className="text-[#DBC8AC] mt-0.5 text-sm">{customer.title}</div>
    </div>
  );
};

const Star = ({ rating }: { rating: any }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    const starIndex = index + 1;
    return rating > starIndex ? (
      <FaStar />
    ) : rating > starIndex - 0.5 ? (
      <FaStarHalfAlt />
    ) : (
      <FaRegStar />
    );
  });
  return (
    <span className="flex justify-center text-chipo-hover-text ">
      {ratingStar}
    </span>
  );
};

export default Testimonial;

const mockData = [
  {
    avatar: "/images/home/avatar.webp",
    name: "Beo",
    title: "Best Food Quality",
    rating: 2.8,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut saepe esse similique, enim tempore autem fugiat id! Officia, incidunt. Teneturdeleniti itaque repudiandae, nisi consequuntur maiores esse quis atconsectetur.",
  },
  {
    avatar: "/images/home/avatar.webp",
    name: "Beo",
    title: "Best Food Quality",
    rating: 3.2,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut saepe esse similique, enim tempore autem fugiat id! Officia, incidunt. Teneturdeleniti itaque repudiandae, nisi consequuntur maiores esse quis atconsectetur.",
  },
  {
    avatar: "/images/home/avatar.webp",
    name: "Beo",
    title: "Best Food Quality",
    rating: 4.8,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut saepe esse similique, enim tempore autem fugiat id! Officia, incidunt. Teneturdeleniti itaque repudiandae, nisi consequuntur maiores esse quis atconsectetur.",
  },
  {
    avatar: "/images/home/avatar.webp",
    name: "Beo",
    title: "Best Food Quality",
    rating: 3.9,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut saepe esse similique, enim tempore autem fugiat id! Officia, incidunt. Teneturdeleniti itaque repudiandae, nisi consequuntur maiores esse quis atconsectetur.",
  },
];
