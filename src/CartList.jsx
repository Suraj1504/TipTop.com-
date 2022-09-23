import React from "react";
import CartRow from "./CartRow";

function CartList() {
  return (
    <>
      <div className="flex py-2 bg-gray-50 justify-evenly">
        <span></span>
        <h1 className="mx-10 font-sans text-lg font-semibold text-gray-700 ">
          Product
        </h1>
        <h1 className="font-sans text-lg font-semibold text-gray-700">Price</h1>
        <hl className="font-sans text-lg font-semibold text-gray-700">
          Quantity
        </hl>
        <h1 className="font-sans text-lg font-semibold text-gray-700">
          Subtotal
        </h1>
      </div>
      <CartRow />
    </>
  );
}

export default CartList;
