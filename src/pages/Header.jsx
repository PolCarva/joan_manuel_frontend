import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full h-full p-3 mx-auto">
      <nav className="w-full">
        <ul className="flex justify-between md:grid grid-cols-12 md:grid-cols-10 gap-6 text-xs">
          <li className="col-span-2 flex">
            <Link
              to={"/"}
              className="hover:text-gray-500 flex-1 transition-colors ease-in-out duration-200"
            >
              JOAN MANUEL
            </Link>
          </li>
          <li className="col-span-4 flex">
            <Link
              className={`${
                location.pathname === "/about" && "underline"
              } text-gray-400 flex-1 hover:text-black cursor-pointer transition-colors ease-in-out duration-200`}
              to={"/about"}
            >
              About
            </Link>
          </li>
          <li className="col-span-4 flex">
            <Link
              className={`${
                location.pathname === "/contact" && "underline"
              } text-gray-400 flex-1 hover:text-black cursor-pointer transition-colors ease-in-out duration-200`}
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
