import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen pt-48 bg-hero-shop bg-cover">
      <div className="flex md:flex-row gap-2 justify-between items-center wrap-content flex-col">
        <div className="flex-1 font-montserrat">
          <h1 className="text-chipo-heading text-6xl font-['daysOne'] leading-[70px]">{`We're alway in the mood for food`}</h1>

          <p className="mt-8 text-chipo-text text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non
            fugit fugiat reprehenderit. <br /> Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Odit non, illo fugit ut officiis
            atque dolore, neque voluptate nisi id sequi! Perspiciatis et
            veritatis nihil mollitia tempore porro libero ratione?
          </p>
          <button className="px-4 mt-5 py-2 text-lg rounded-md bg-chipo-heading font-bold">
            Order now
          </button>
        </div>
        <div className="flex-1">
          <div className="flex justify-end">
            <Image
              src="/images/home/image_hero.webp"
              width={500}
              height={500}
              objectFit="contain"
              alt="VR"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
