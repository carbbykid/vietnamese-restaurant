import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = (): JSX.Element => {
  const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    // return window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 font-["rubikdirt"] ${
        isScroll ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-[1240px] m-auto flex justify-between items-center text-white ease-in duration-200 ${
          isScroll ? "p-4" : "p-4 pt-6 pb-6"
        }`}
      >
        <Link href="/">
          <h1
            className={`font-bold cursor-pointer ease-in duration-200 hover:text-chipo-heading ${
              isScroll ? "text-chipo-heading text-3xl" : "text-white text-4xl"
            }`}
          >
            ChiPoPo
          </h1>
        </Link>

        <ul
          className={`hidden sm:flex font-["rubikdirt"] ease-in duration-200 ${
            isScroll ? "text-chipo-heading" : "text-white"
          }`}
        >
          <li className="p-4 hover:text-chipo-heading ease-in duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-chipo-heading ease-in duration-200">
            <Link href="/#product">Product</Link>
          </li>
          <li className="p-4 hover:text-chipo-heading ease-in duration-200">
            <Link href="#contact">Contact</Link>
          </li>
          <li className="p-4 hover:text-chipo-heading ease-in duration-200">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block sm:hidden cursor-pointer z-10"
        >
          {nav ? (
            <AiOutlineClose
              size={20}
              className={`${isScroll ? "text-chipo-heading" : "white"}`}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              className={`${isScroll ? "text-chipo-heading" : "white"}`}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
