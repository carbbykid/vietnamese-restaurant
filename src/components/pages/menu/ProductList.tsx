import products from "constants/products";
import { ProductListProvider } from "context/ProductListContext";
import Filter from "./Filter";
import GenerateProduct from "./GenerateProduct";
import Search from "./Search";
import SortBy from "./SortBy";

const ProductList = () => {
  return (
    <div className="wrap-content my-[80px]">
      <ProductListProvider data={products}>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] justify-between m-auto gap-x-10 gap-y-4">
            <div className="grid text-[14px] md:text-[16px] grid-cols-[1fr_1fr] gap-4 md:gap-10">
              <Filter />
              <SortBy />
            </div>
            <Search />
          </div>
          <div className="mt-8">
            <GenerateProduct />
          </div>
        </div>
      </ProductListProvider>
    </div>
  );
};

export default ProductList;
