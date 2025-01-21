import React from "react";

const Menu = () => {
  return (
    <div className="fixed top-0 justify-start flex h-full w-full bg-black bg-opacity-60 transition-opacity duration-500">
      <div className="mobile:w-2/5 w-full h-full mt-16 p-5 bg-taupe flex bg-slate-100">
        <ul className="text-xl grid grid-flow-row py-20 h-full">
          <li>skin</li>
          <li>face</li>
          <li>hair</li>
          <li>bath & Body</li>
          <li>Men</li>
          <li>Kids</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
