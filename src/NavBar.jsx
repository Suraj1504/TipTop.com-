import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header({ productCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-5 md:mx-auto">
        <h1 className="font-sans text-2xl font-bold text-primary-default md:text-3xl">
          My E-Cart
        </h1>
        <div className="flex items-center justify-center gap-12">
          <Link className="font-sans text-gray-700 text-md" to="/">
            HOME
          </Link>
          <h1 className="font-sans text-gray-700 text-md">ABOUT</h1>
          <Link className="font-sans text-gray-700 text-md" to="/Login">
            ACCOUNT
          </Link>
          <div className="flex flex-col items-center justify-items">
            <CgShoppingCart className="text-5xl text-primary-default" />
            <span className="-mt-8 -mr-1 text-xs text-primary-default">
              {productCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
