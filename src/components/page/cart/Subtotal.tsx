import products, { ProductType } from "constants/products";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectAllProducts } from "redux/slice/cartSlice";
import groupByAndCount from "util/groupBy";

const Subtotal = () => {
  const router = useRouter();
  const productsId = useSelector(selectAllProducts);

  const groupByToArray = (arr: any[], key: string) => {
    return Object.values(groupByAndCount(arr, key));
  };

  const getProductInMyCart = () => {
    const result: ProductType[] = [];
    productsId.forEach((productId) => {
      const term = products.find(
        (product) => product.id === (productId as unknown as string),
      );
      if (term) {
        result.push(term);
      }
    });
    return groupByToArray(result, "id");
  };

  const getTotalPrice = (): number => {
    const total = getProductInMyCart()?.reduce(
      (totalPrice: any, product: any) => {
        return (totalPrice = totalPrice + product.quantity * product.price);
      },
      0,
    );
    return total as number;
  };

  return (
    <div>
      <div className="flex justify-between">
        <span className="font-semibold text-chipo-text">Subtotal</span>
        <span className="text-[20px] font-bold text-chipo-heading">
          {getTotalPrice()}
        </span>
      </div>
      <p className="mt-2">taxes and shipping will calculate in checkout</p>
      <div>
        <button
          onClick={() => console.log("Checkout")}
          className="text-center w-full px-5 mt-10 py-2 bg-chipo-heading hover:bg-chipo-blue duration-200 cursor-pointer text-white rounded-md"
        >
          Checkout
        </button>
        <button
          onClick={() => router.replace("/shop")}
          className="text-center w-full px-5 mt-3 py-2 bg-chipo-heading hover:bg-chipo-blue duration-200 cursor-pointer text-white rounded-md"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Subtotal;
