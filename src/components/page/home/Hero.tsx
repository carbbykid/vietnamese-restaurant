import ModalVideo from "components/templates/ModalVideo";

const Hero = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 custom-img bg-no-repeat bg-cover bg-bottom bg-fixed">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2] mt-[-10rem]" />
      <div className="p-5 z-[10] m-auto text-center text-chipo-text sm:w-9/12">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-7xl">
          {heading}
        </h2>
        <p className="max-w-[100%] text-md py-4 m-auto font-light tracking-wide sm:text-2xl sm:py-8 sm:max-w-[780px]">
          {message}
        </p>
        <ModalVideo />
      </div>
    </div>
  );
};

export default Hero;
