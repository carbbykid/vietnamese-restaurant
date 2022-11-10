const Product = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  return (
    <div id="product" className="pb-16 md:pb-[160px] md:pt-[110px]">
      <div className="wrap-content">
        <h2 className="heading">{heading}</h2>
        <div className="message">{message}</div>
        <hr className="divider" />
        <div className="mt-8 md:mt-[90px]">
          <img
            src="/images/home/apple-watch-2.png"
            alt="apple-watch-2"
            className="w-56 md:w-[350px] m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
