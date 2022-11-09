import {
  ProductListContext,
  ProductListContextType,
} from "context/ProductListContext";
import React, { useContext } from "react";

const Filter = () => {
  const { filterValue, setFilterValue } = useContext(
    ProductListContext,
  ) as ProductListContextType;
  return (
    <div className="w-full">
      <select
        onChange={(e: React.FormEvent<HTMLSelectElement>) => {
          const target = e.target as HTMLInputElement;
          setFilterValue(target.value);
        }}
        value={filterValue as string}
        defaultValue=""
        name="filter-category"
        id="filter-category"
        className="px-4 py-2 text-black w-full bg-chipo-gray-blur rounded-md outline-none"
      >
        <option value="" disabled>
          Filter by category
        </option>
        <option value="sofa">Sofa</option>
        <option value="mobile">Mobile</option>
        <option value="chair">Chair</option>
        <option value="watch">Watch</option>
        <option value="wireless">Wireless</option>
      </select>
    </div>
  );
};

export default Filter;
