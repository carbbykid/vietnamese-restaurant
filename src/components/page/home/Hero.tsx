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
    <div className="custom-img bg-no-repeat bg-cover bg-bottom bg-fixed">
      <div className="flex items-center justify-center h-screen mb-12 max-w-[1170px] m-auto">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2] mt-[-10rem]" />
        <div className="px-5 pt-5 m-auto text-center text-chipo-heading sm:w-9/12 z-[2]">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-7xl text-chipo-heading">
            {heading}
          </h2>
          <p className="sm:text-2xl sm:py-8 sm:max-w-[780px] message">
            {message}
          </p>
          <button
            onClick={() => setActiveModal(!activeModal)}
            className="flex m-auto items-center py-2 px-8 text-[16px] sm:text-[27px] text-white rounded-[60px] bg-chipo-blue ease-in duration-300 hover:bg-chipo-heading sm:px-10"
          >
            Play
            <FaRegPlayCircle className=" text-[16px] sm:text-[27px] mx-2" />
            video
          </button>
          <img
            src="/images/home/apple-watch.png"
            alt="app-watch"
            className="m-auto w-[290px] h-auto mt-[110px] pl-[30px]"
          />
        </div>
      </div>
      <ModalVideo activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
};

export default Hero;
