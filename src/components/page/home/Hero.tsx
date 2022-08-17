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
      <div className="p-5 z-[2] w-9/12 m-auto text-center text-chipo-text">
        <h2 className="text-7xl font-bold">{heading}</h2>
        <p className="py-8 text-2xl">{message}</p>
        <button className="px-16 py-2 text-[27px] text-chipo-text border border-chipo-text">
          Play video
        </button>
      </div>
    </div>
  );
};

export default Hero;
