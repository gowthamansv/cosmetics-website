import React from "react";
import logo from "../assets/azhagi.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = ({ setShowCart, setShowMenu }) => {
  return (
    <nav className="nav flex justify-between z-50 sticky top-0">
      <div className="flex items-center mx-2">
        <FiMenu
          className="hover:cursor-pointer text-2xl"
          onClick={() => {
            setShowMenu((prevState) => !prevState);
          }}
        />
        <img src={logo} className="w-44 h-14 m-2 object-cover" />
      </div>
      <div className="hidden mobile:flex items-center">
        <ul className="flex space-x-6 text-lg uppercase text-white">
          <li>
            <Link to="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalogue" className="hover:text-black">
              Catalogue
            </Link>
          </li>
          <li>
            <Link to="/nutrition" className="hover:text-black">
              Nutrition
            </Link>
          </li>
          <li>
            <Link to="/category" className="hover:text-black">
              Category
            </Link>
          </li>
        </ul>
      </div>

      {/* Additional Section (if needed) */}
      <div className="flex items-center mx-4">
        <Link to="/" className="text-white px-4 py-2 text-xl">
          Log In
        </Link>
        <FaShoppingBag
          className="hover:cursor-pointer"
          onMouseEnter={() => {
            setShowCart(true);
          }}
          onClick={() => {
            setShowCart((prevState) => !prevState);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
