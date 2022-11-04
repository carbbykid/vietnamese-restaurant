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
          <div className="grid grid-cols-[1fr_2fr] justify-between p-5 m-auto gap-10">
            <Filter />
            <div className="grid grid-cols-[1fr_2fr] gap-5">
              <SortBy />
              <Search />
            </div>
          </div>
          <GenerateProduct />
        </div>
      </ProductListProvider>
    </div>
  );
};

export default ProductList;
