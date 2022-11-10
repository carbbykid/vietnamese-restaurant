import ModalVideo from "components/templates/ModalVideo";
import { FaRegPlayCircle } from "react-icons/fa";
import { useState } from "react";

const Hero = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <div className="bg-hero-home bg-no-repeat bg-cover bg-bottom bg-fixed">
      <div className="flex pt-16 items-center justify-center h-screen mb-12 max-w-[1170px] m-auto">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2] mt-[-10rem]" />
        <div className="relative px-4 md:px-5 pt-5 m-auto text-center text-chipo-heading lg:w-9/12 z-[2]">
          <h2 className="text-4xl font-bold tracking-tighter lg:text-7xl text-chipo-heading">
            {heading}
          </h2>
          <p className="lg:text-2xl mt-2 md:py-8 lg:max-w-[780px] message">
            {message}
          </p>
          <button
            onClick={() => setActiveModal(!activeModal)}
            className="mt-3 flex m-auto items-center text-lg px-5 leading-[50px] md:leading-[60px] md:text-[27px] lg:px-10 font-medium lg:leading-[72px] text-white rounded-3xl md:rounded-[60px] bg-chipo-blue ease-in duration-300 hover:bg-chipo-heading"
          >
            Play
            <FaRegPlayCircle className="text-3xl md:text-[43px] mx-2 md:mx-[15px]" />
            video
          </button>
          <img
            src="/images/home/apple-watch.png"
            alt="app-watch"
            className="m-auto w-[290px] mt-8 h-auto lg:mt-[110px] pl-[30px]"
          />
        </div>
      </div>
      <ModalVideo activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
};

export default Hero;
