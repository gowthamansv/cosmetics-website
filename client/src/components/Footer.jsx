import React from "react";
import logo from "../assets/azhagi.png";
import f from "../assets/f.png";
import i from "../assets/i.png";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="grid mobile:grid-flow-row grid-cols-1 mobile:grid-cols-5 w-full bg-logo text-white">
      <div className="col-span-2 grid grid-flow-row gap-5 p-4">
        <img src={logo} alt="" className="w-44 h-14 m-2 object-cover" />
        <p>
          We are passionate about empowering you to embrace your natural beauty
          and achieve a glowing, healthy complexion.
        </p>
      </div>
      <div className="p-4 col-span-2 mobile:col-span-1">
        <h2 className="text-3xl tracking-widest font-valky">Pages</h2>
        <ul className="hidden mobile:flex flex-col">
          <li>Home</li>
          <li>Shop</li>
          <li>Our Story</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="p-4 col-span-2 mobile:col-span-1">
        <h2 className="text-3xl tracking-widest font-valky">Legal</h2>
        <ul className="hidden mobile:flex flex-col">
          <li>Privacy Policy</li>
          <li>Instructions</li>
          <li>License</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="p-4 col-span-2 mobile:col-span-1">
        <h2 className="text-3xl tracking-widest font-valky">Contact Us</h2>
        <ul className="hidden mobile:flex flex-col">
          <li>Have questions & suggestions? Need assistance?</li>
          <li>Give us a call +2 457 8784 1545</li>
        </ul>
      </div>
      <div className="col-span-2 mobile:col-span-5 flex flex-col justify-center items-center gap-4 p-4">
        <div className="flex gap-5">
          <img src={f} alt="Facebook" className="w-8" />
          <img src={i} alt="Instagram" className="w-8" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <BiCopyright />
          <p>2025 Naturla, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
