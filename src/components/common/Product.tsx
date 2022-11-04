import { ProductType } from "constants/products";
import { FaPlusCircle } from "react-icons/fa";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <div className="justify-center ">
      <img src={product.imgUrl.src} />
      <h4 className="text-black">{product.productName}</h4>
      <span className="font-serif inline-block text-black text-[16px] bg-green-300 px-2 rounded-md mt-3">
        {product.category}
      </span>
      <div className="flex justify-between items-center mt-3">
        <h4 className="text-black">{product.price}</h4>
        <button className="text-chipo-heading hover:text-chipo-blue">
          <FaPlusCircle className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default Product;
