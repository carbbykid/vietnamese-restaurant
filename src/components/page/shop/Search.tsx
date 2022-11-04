import {
  ProductListContext,
  ProductListContextType,
} from "context/ProductListContext";
import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { setSearchValue } = useContext(
    ProductListContext,
  ) as ProductListContextType;
  return (
    <div>
      <form>
        <div className="relative">
          <input
            className="px-4 w-full py-2 text-black bg-chipo-gray-blur rounded-md outline-none flex-1 pr-[40px]"
            type="text"
            placeholder="Search..."
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              const target = e.target as HTMLInputElement;
              setSearchValue(target.value);
            }}
          />
          <FaSearch className="text-[16px] sm:text-[18px] absolute top-0 right-0 -translate-x-1/2 translate-y-1/2" />
        </div>
      </form>
    </div>
  );
};

export default Search;
