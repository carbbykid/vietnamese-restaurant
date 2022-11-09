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
      <div className="grid grid-cols-4 gap-5">
        {outputData?.map((product) => (
          <Product key={product.id} product={product as ProductType} />
        ))}
      </div>
    </div>
  );
};

export default GenerateProduct;
