import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import Header from "./Header";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";

function App() {
  const discount = "10% OFF SALE!";
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);
  git;

  function handleAddTOCart(productId, count) {
    const oldCount = cart[productId] || 0;

    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div className="flex flex-col h-screen overflow-y-scroll bg-slate-200 ">
      <Header productCount={totalCount} />
      <Routes>
        <Route index element={<ProductListPage d={discount} />}></Route>
        <Route
          path="/product/:id/"
          element={<ProductDetail onAddToCart={handleAddTOCart} />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer
        copyright="Copyright @ 2022 | Codeyogi"
        poweredBy="Powered By Suraj"
      />
    </div>
  );
}

export default App;
