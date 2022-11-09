import {
  ProductListContext,
  ProductListContextType,
} from "context/ProductListContext";
import React, { useContext } from "react";

const SortBy = () => {
  const { sortByValue, setSortByValue } = useContext(
    ProductListContext,
  ) as ProductListContextType;
  return (
    <div className="w-full">
      <select
        onChange={(e: React.FormEvent<HTMLSelectElement>) => {
          const target = e.target as HTMLInputElement;
          setSortByValue(target.value);
        }}
        value={sortByValue as string}
        defaultValue=""
        name="sort-category"
        id="sort-category"
        className="px-4 py-2 w-full text-black bg-chipo-gray-blur rounded-md outline-none"
      >
        <option value="" disabled>
          Sort By
        </option>
        <option value="low">Low Price</option>
        <option value="high">High Price</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
};

export default SortBy;
