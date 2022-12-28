import { FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar wrap-content mt-[50px]">
      <div className="grid grid-cols-[1fr_2fr] justify-between p-5 m-auto ">
        <div className="filter"></div>

        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <div className="sort"></div>

          <div className="find"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
