import Product from "components/common/Product";
import { ProductType } from "constants/products";
import {
  ProductListContext,
  ProductListContextType,
} from "context/ProductListContext";
import { useContext } from "react";

const GenerateProduct = () => {
  const { outputData } = useContext(
    ProductListContext,
  ) as ProductListContextType;

  return (
    <div>
      {outputData?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
          {outputData?.map((product) => (
            <Product key={product.id} product={product as ProductType} />
          ))}
        </div>
      ) : (
        <div className="h-[50px] mt-8 flex items-center justify-center text-[20px] text-chipo-text text-center">
          No products are found!
        </div>
      )}
    </div>
  );
};

export default GenerateProduct;
