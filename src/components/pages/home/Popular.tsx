import PopularCard from "components/common/PopularCard";
import React from "react";

const Popular = () => {
  return (
    <div className="md:h-[700px] pt-14 pb-16 md:pt-20 bg-[#fffaf3]">
      <div className="wrap-content">
        <h1 className="heading text-chipo-text-dark text-center">
          Most Popular Food
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-10 first-of-type:mt-14 mt-20">
          {fakeData.map((item) => (
            <PopularCard key={item.id} product={item} />
          ))}
        </div>
        <button className="drop-shadow-md button-primary center-inline mt-14 ">
          See more
        </button>
      </div>
    </div>
  );
};

export default Popular;

const fakeData = [
  {
    id: 1,
    imgUrl: "/images/home/popular1.webp",
    productName: "Deep Fried",
    category: "fried",
    price: "$ 9.88",
  },
  {
    id: 2,
    imgUrl: "/images/home/popular2.webp",
    productName: "Pickled Fish",
    category: "pickled",
    price: "$ 7.89",
  },
  {
    id: 3,
    imgUrl: "/images/home/popular3.webp",
    productName: "Shrimp Sauce",
    category: "sauce",
    price: "$ 12.11",
  },
];
