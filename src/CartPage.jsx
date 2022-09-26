import React from "react";
import CartList from "./CartList";

function CartPage() {
  return (
    <div className="bg-gray-200 ">
      <div className="h-screen mx-10 bg-white my-14">
        <div className="py-20 bg-white px-28 space-between">
          <CartList />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
