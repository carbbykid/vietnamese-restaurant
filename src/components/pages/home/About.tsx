import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-screen pt-48 bg-hero-shop bg-cover">
      <div className="flex md:flex-row-reverse gap-10 justify-between wrap-content flex-col">
        <div className="flex-1 font-montserrat">
          <h1 className="text-chipo-heading text-4xl font-['daysOne']">
            About us
          </h1>

          <p className="mt-8 text-chipo-text text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non
            fugit fugiat reprehenderit. <br /> Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Odit non, illo fugit ut officiis
            atque dolore, neque voluptate nisi id sequi! Perspiciatis et
            veritatis nihil mollitia tempore porro libero ratione?
          </p>
          <button className="px-4 mt-5 py-2 text-lg rounded-md bg-chipo-heading font-bold">
            Read more
          </button>
        </div>
        <div className="flex-1">
          <div className="flex rounded-lg">
            <Image
              src="/images/home/about_us.webp"
              width={600}
              height={350}
              className="rounded-lg"
              alt="VR"
              // style={{ borderRadius: "25px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
