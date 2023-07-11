const HeroPage = ({ product }: { product: string }) => {
  return (
    <div className="bg-hero-page bg-no-repeat bg-fixed bg-cover bg-bottom">
      <div className="h-[200px] sm:h-[250px] lg:h-[500px] relative flex justify-center items-center">
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-slate-500/40 z-[2]" />
        <h2 className="text-white relative font-bold mt-6 lg:mt-0 text-4xl sm:text-5xl lg:text-6xl z-[3]">
          {product}
        </h2>
      </div>
    </div>
  );
};

export default HeroPage;
