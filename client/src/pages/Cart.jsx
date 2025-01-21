import React from "react";

const Cart = ({ setShowCart }) => {
  return (
    <div
      className="fixed top-0 justify-end flex h-full w-full bg-black bg-opacity-60 transition-opacity duration-500"
      onMouseOver={() => {
        setTimeout(() => setShowCart(false), 300);
      }}
    >
      <div
        className="w-96 h-full bg-taupe flex flex-col justify-between bg-slate-100"
        onMouseOver={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="mt-20 text-2xl p-5">Shopping bag</h1>
        <div className="text-black flex h-full justify-center items-center">
          <h2 className="text-2xl">Empty bag</h2>
        </div>
        <button className="m-5 rounded-full bg-orange-700 p-4">
          Go to bag
        </button>
      </div>
    </div>
  );
};

export default Cart;
