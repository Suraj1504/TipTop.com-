import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import { getProductData } from "./Api";
import Loading from "./Loading";
import NotFound from "./NotFound";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);

      p.then(function (product) {
        setProduct(product);
        console.log("then is running");
        setLoading(false);
      }).catch(function () {
        console.log("API error");
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
    setCount(1);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="w-screen p-4 bg-gray-200 md:px-12 md:py-8">
      <div className="flex flex-col w-full h-full p-6 bg-white md:p-14">
        <div className="mb-8">
          <Link className="text-4xl md:text-5xl text-primary-dark" to="/">
            <BsArrowLeftSquare />
          </Link>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-16">
          <div className="w-full h-auto md:w-1/2 md:h-screen aspect-square">
            <img className="w-full aspect-square " src={product.thumbnail} />
          </div>
          <div className="flex flex-col w-auto h-auto gap-4 md:w-1/2 md:h-screen">
            <h1 className="text-4xl font-medium text-gray-900 md:text-6xl font-heebo">
              {product.title}
            </h1>
            <h4 className="text-2xl font-medium text-black font-heebo">
              $ {product.price}
            </h4>
            <span className="text-base text-gray-700">
              {product.description}
            </span>
            <p className="text-lg font-semibold text-gray-700 font-heebo">
              Category : {product.category}
            </p>
            <div className="flex gap-1 mt-4">
              <input
                value={count}
                onChange={handleCountChange}
                className="w-32 border rounded-md broder-gray-700 lg:px-2 lg:py-2"
                type="number"
              />
              <button
                onClick={handleButtonClick}
                className="p-2 font-bold text-white border rounded-md bg-primary-default broder-gray-900 hover:bg-primary-dark md:p-2 md:px-6"
              >
                ADD TO CART
              </button>
            </div>
            <div className="flex justify-between h-full mt-6 md:items-end md:justify-end md:gap-20 md:mr-10">
              {id > 1 && (
                <Link
                  className="text-5xl lg:text-6xl hover:text-primary-dark text-primary-default"
                  to={"/product/" + (id - 1)}
                >
                  <BsBoxArrowInLeft />
                </Link>
              )}
              <Link
                className="text-5xl lg:text-6xl hover:text-primary-dark text-primary-default"
                to={"/product/" + (id + 1)}
              >
                <BsBoxArrowInRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
