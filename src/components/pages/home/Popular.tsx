import Image from "next/image";
import React from "react";

const Popular = () => {
  return (
    <div className="h-[900px] pt-48 bg-white">
      <div className="wrap-content">
        <h1 className="text-chipo-heading text-4xl font-montserrat text-center">
          Popular Food
        </h1>

        <div className="flex rounded-lg">
          <Image
            src="/images/home/about_us.webp"
            width={600}
            height={350}
            className="rounded-lg"
            alt="VR"
          />
        </div>
      </div>
    </div>
  );
};

export default Popular;
