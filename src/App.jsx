import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import Header from "./Header";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";
import CartPage from "./CartPage";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

function App() {
  const discount = "10% OFF SALE!";
  const suraj = 1;
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);

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
        <Route path="/CartPage" element={<CartPage />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
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
