import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[800px] h-screen pt-44 relative before:content-[''] before:bg-hero-shop before:bg-cover before:absolute before:top-0 before:left-0 before:right-0 before:z-[6] before:bottom-0 before:opacity-60">
      <video
        className="absolute top-0 left-0 right-0 bottom-0 z-[5] object-cover w-screen min-h-[800px] h-screen"
        src="https://wildwoodrestaurants.co.uk/wp-content/uploads/WW-Website-Christmas-Carousel-SPARKLE-NEWPRICE.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10">
        <div className="flex gap-2 justify-center items-center wrap-content">
          <div className="font-montserrat text-center">
            <h1 className="text-chipo-heading text-6xl mb-8 font-['daysOne'] leading-[70px]">{`We're alway in the mood for food`}</h1>
            <Image
              width={400}
              height={200}
              objectFit="contain"
              src="/images/home/food_herro.png"
            />
            <p className="mt-5 w-[900px] my-0 mx-auto text-chipo-heading text-lg">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.Eum non fugit fugiat reprehenderit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              possimus sunt ratione similique officiis corporis beatae.
            </p>
            <div className="flex justify-center mt-10">
              <button className="px-4 py-2 text-lg rounded-md bg-chipo-text font-bold hover:bg-chipo-hover-text duration-200 text-chipo-bg-primary">
                Order now
              </button>
              <button className="ml-5 px-4 py-2 text-lg rounded-md bg-chipo-bg-primary font-bold duration-200 hover:bg-chipo-bg-hover">
                See menu
              </button>
            </div>
          </div>
          {/* <div className="flex-1">
            <div className="flex justify-end">
              <Image
                src="/images/home/image_hero.webp"
                width={500}
                height={500}
                objectFit="contain"
                alt="VR"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
