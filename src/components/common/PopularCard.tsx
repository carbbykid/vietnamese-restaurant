import { addProduct } from "redux/slice/cartSlice";
import { ProductType } from "constants/products";
import { FaPlusCircle, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";

const PopularCard = ({ product }: { product: any }) => {
  // const dispatch = useDispatch();

  return (
    <div className="bg-white drop-shadow-md rounded-md p-4 pb-5 text-chipo-bg-primary hover:scale-105 duration-300">
      <Link href={`/product/${product.id}`}>
        <a className="cursor-pointer">
          <div className="duration-200 flex justify-center rounded-sm">
            <Image
              src={product.imgUrl}
              width={500}
              height={330}
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          <div className="flex justify-between">
            <h4 className="font-bold mt-2 md:mt-3 text-xl">
              {product.productName}
            </h4>
            <div className="flex gap-1 items-center">
              4.8 <FaStar />
            </div>
          </div>
        </a>
      </Link>
      <div className="flex justify-between items-center mt-2 md:mt-3">
        <h4 className="font-medium md:font-normal">{product.price}</h4>

        <button
          onClick={() => {
            // dispatch(addProduct(product));
            return toast.success("Product added successfully");
          }}
          className="text-chipo-bg-primary hover:text-chipo-blue rounded-md "
        >
          <div className="border border-chipo-bg-primary hover:bg-chipo-text duration-200 px-3 rounded-md py-1">
            Add to cart
            {/* <FaPlusCircle className="text-chipo-heading text-[22px] md:text-2xl" /> */}
          </div>
        </button>
      </div>
    </div>
  );
};

export default PopularCard;
