import BlogCard from "components/common/BlogCard";
import PopularCard from "components/common/PopularCard";
import React from "react";

const OurBlogs = () => {
  return (
    <div className="h-[850px] pt-28 bg-[#fffaf3]">
      <div className="wrap-content">
        <h1 className="heading text-chipo-text-dark">Recent Blog Posts</h1>
        <div className="grid grid-cols-2 justify-between gap-4 mt-10">
          {fakeData.slice(0, 3).map((item, idx) => (
            <BlogCard
              key={idx}
              blog={item}
              index={idx}
              classNameWrap="first:row-span-2 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;

const fakeData = [
  {
    id: 1,
    imgUrl: "/images/home/popular1.webp",
    blogName: "Deep Fried",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibuslabore rerum obcaecati ipsam voluptatum minima consequatur, ipsaquisquam excepturi unde magni deleniti iusto aperiam suscipit eos veroerror molestias mollitia!",
    creater: "Anthony Bourdain",
    date: "01/10/2022",
    tabs: ["Food", "Cook", "News"],
  },
  {
    id: 2,
    imgUrl: "/images/home/popular2.webp",
    blogName: "Pickled Fish",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibuslabore rerum obcaecati ipsam voluptatum minima consequatur, ipsaquisquam excepturi unde magni deleniti iusto aperiam suscipit eos veroerror molestias mollitia!",
    creater: "John Smith",
    date: "14/03/2022",
    tabs: ["Food"],
  },
  {
    id: 3,
    imgUrl: "/images/home/popular3.webp",
    blogName: "Shrimp Sauce",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibuslabore rerum obcaecati ipsam voluptatum minima consequatur, ipsaquisquam excepturi unde magni deleniti iusto aperiam suscipit eos veroerror molestias mollitia!",
    creater: "Gordon Ramsay",
    date: "04/11/2022",
    tabs: ["Cook"],
  },
];
