const ProductDetail = ({
  product,
}: {
  product: {
    src: string;
    alt: string;
    name: string;
    desc: string;
    price: string;
  };
}): JSX.Element => {
  return (
    <div className="auto text-center p-[15px]">
      <img
        src={product.src}
        alt={product.alt}
        className="w-[262px] height-[262px] m-auto mb-[30px]"
      />
      <div className="text-chipo-blue font-semibold">{product.name}</div>
      <div className="text-[13px] mt-[5px]">{product.desc}</div>
      <div className="text-[19px] font-bold mt-[14px] mb-[20px] text-chipo-orange">
        {product.price}
      </div>
      <a
        href="#"
        className="text-[12px] font-light px-[33px] py-[2px] border border-[#e1e4e7] rounded-[30px] leading-[26px] inline-block hover:btn-hover1 ease-in duration-200"
      >
        CHOOSE
      </a>
    </div>
  );
};

export default ProductDetail;
