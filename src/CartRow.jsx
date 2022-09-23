import React from "react";

function CartRow() {
  return (
    <div className="flex bg-white justify-evenly ">
      <img src="" />
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
  );
}

export default CartRow;
