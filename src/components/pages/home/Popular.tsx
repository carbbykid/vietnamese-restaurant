import PopularCard from "components/common/PopularCard";
import React from "react";

const Popular = () => {
  return (
    <div className="h-[850px] pt-28 bg-[#fffaf3]">
      <div className="wrap-content">
        <h1 className="heading text-chipo-text-dark text-center">
          Most Popular Food
        </h1>

        <div className="flex justify-between gap-10 mt-20">
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
