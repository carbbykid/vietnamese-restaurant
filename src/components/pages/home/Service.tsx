import React from "react";
import { IoRestaurantOutline, IoFastFood } from "react-icons/io5";
import { BiDish } from "react-icons/bi";

const OurService = () => {
  return (
    <div className="pt-16">
      <div className="wrap-content">
        <h1 className="heading text-chipo-heading text-center">
          Our Awesome Service
        </h1>
        <div className="flex justify-between mt-20">
          {fakeData.map((item, idx) => (
            <div
              key={idx}
              className="p-8 w-[300px] text-center bg-[#3a3a3a] rounded-md"
            >
              <div className="p-2 bg-chipo-text inline-block rounded-md">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold mt-3">{item.title}</h4>
              <p className="text-sm mt-3"> {item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="divider" />
    </div>
  );
};

export default OurService;

const fakeData = [
  {
    icon: <IoRestaurantOutline className="text-5xl" />,
    title: "Best Food Quality",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,consequuntur optio omnis.",
  },
  {
    icon: <BiDish className="text-5xl" />,
    title: "Unlimited Food",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,consequuntur optio omnis.",
  },
  {
    icon: <IoFastFood className="text-5xl" />,
    title: "Set menu plater",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,consequuntur optio omnis.",
  },
];
