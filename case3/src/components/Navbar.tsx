import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Hero } from "./Hero";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  // Menambahkan event listener untuk scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full flex py-6 px-10 justify-between items-center navbar z-10 fixed top-0 transition-all duration-300 ${
          scroll
            ? "bg-gray-500/90 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        } sm:border-b-[1px] border-b-0 text-white`}
      >
        <div className="text-2xl font-bold">KisahKopi</div>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li className="mx-10 cursor-pointer hover:text-gray-300">Home</li>
          <li className="mx-10 cursor-pointer hover:text-gray-300">About</li>
          <li className="mx-10 cursor-pointer hover:text-gray-300">Services</li>
          <li className="mx-10 cursor-pointer hover:text-gray-300">Contact</li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            className="text-2xl cursor-pointer"
            onClick={handleToggle}
          >
            {toggleMenu ? <IoIosClose /> : <CiMenuFries />}
          </button>

          {toggleMenu && (
            <ul
              className={`list-none absolute top-16 right-0 my-2 min-w-[140px] shadow-lg rounded-md py-2 px-4 flex flex-col justify-end items-end ${
                scroll
                  ? "bg-gray-800/90 backdrop-blur-sm"
                  : "bg-black/70 backdrop-blur-sm"
              }`}
            >
              <li className="mx-2 my-2 cursor-pointer hover:text-gray-300">
                Home
              </li>
              <li className="mx-2 my-2 cursor-pointer hover:text-gray-300">
                About
              </li>
              <li className="mx-2 my-2 cursor-pointer hover:text-gray-300">
                Services
              </li>
              <li className="mx-2 my-2 cursor-pointer hover:text-gray-300">
                Contact
              </li>
            </ul>
          )}
        </div>
      </nav>
      <Hero />
    </>
  );
};

export default Navbar;
