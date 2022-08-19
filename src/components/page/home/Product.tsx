const Product = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  return (
    <div id="product" className="pb-[160px] pt-[110px]">
      <div className="m-auto px-[15px] max-w-[1170px]">
        <h2 className="heading">{heading}</h2>
        <div className="max-w-[100%] text-md py-1 text-chipo-text text-center m-auto font-light tracking-wide sm:text-xl sm:py-6 sm:max-w-[60%]">
          {message}
        </div>
        <hr className="border-4 border-chipo-gray-blur cursor-pointer hover:border-chipo-text duration-500 w-20 m-auto" />
        <div className="mt-[90px]">
          <img
            src="/images/home/apple-watch-2.png"
            alt="apple-watch-2"
            className="sm:w-[350px] m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
