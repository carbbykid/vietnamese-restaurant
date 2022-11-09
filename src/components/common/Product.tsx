import { addProduct } from "redux/slice/cartSlice";
import { ProductType } from "constants/products";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Product = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();

  return (
    <div className="justify-center">
      <Link href={`/product/${product.id}`}>
        <a className="cursor-pointer">
          <img className="duration-200 hover:scale-105" src={product.imgUrl} />
          <h4 className="text-black mt-3">{product.productName}</h4>
          <span className="font-serif inline-block text-black text-[16px] bg-green-300 px-2 rounded-md mt-3">
            {product.category}
          </span>
        </a>
      </Link>
      <div className="flex justify-between items-center mt-3">
        <h4 className="text-black">{product.price}</h4>
        <button
          onClick={() => dispatch(addProduct(product.id))}
          className="text-chipo-heading hover:text-chipo-blue"
        >
          <FaPlusCircle className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default Product;
