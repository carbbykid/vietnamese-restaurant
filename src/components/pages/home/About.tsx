import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pb-40">
      <div className="flex md:flex-row-reverse gap-10 justify-between wrap-content flex-col">
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
        <div className="flex-1 font-montserrat">
          <h1 className="heading font-semibold">About us</h1>

          <p className="mt-8 text-chipo-heading text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non
            fugit fugiat reprehenderit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. <br /> Adipisci consequuntur veniam repellat in
            ullam aperiam architecto saepe, recusandae asperiores ipsum
            deserunt? Voluptatibus repellendus aperiam cumque, perspiciatis
            recusandae eaque amet provident.
          </p>
          <button className="button-primary mt-5">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
