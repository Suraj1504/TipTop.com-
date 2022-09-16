import React from "react";
import { CgShoppingCart } from "react-icons/cg";

function Header({ productCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-5 md:mx-auto">
        <p className="text-2xl font-bold text-primary-default md:text-3xl font-heebo">
          Suraj's Website
        </p>
        <div className="flex flex-col items-center justify-items">
          <CgShoppingCart className="text-6xl text-primary-default" />
          <span className="-mt-10 -mr-1 text-sm text-primary-default">
            {productCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
