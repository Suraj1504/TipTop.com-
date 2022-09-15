import React from "react";

function CartPage() {
  return (
    <div className="h-screen">
      <div>This is Cart Page</div>
      <div className="p-4 bg-gray-300">
        <div className="bg-white">
          <div className="flex bg-gray-400 space-between">
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1>Subtotal</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
