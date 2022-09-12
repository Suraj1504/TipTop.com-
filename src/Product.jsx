import React from 'react';
import {Link} from "react-router-dom";


function Product({ thumbnail, category, title, price, id, discount }) {

  return (
    <div className="max-w-xl p-2">
      <div className="w-full aspect-square ">
        <img className="w-full h-full aspect-square shadow object-cover" src={thumbnail} />
      </div>
      <div className="text-gray-500 text-heebo font-medium">{category}</div>
      <div className="text-heebo font-semibold">{title}</div>
      <div className="text-heebo font-semibold">${price}</div>
      <div className="text-heebo text-primary-dark font-semibold mb-2">{discount}</div>
      <Link className=" border border-primary-default hover:border-primary-dark rounded-md hover:bg-primary-dark hover:text-white px-2 hover:font-semibold text-primary-default" to={"/product/" + id}>View Details</Link>
    </div>
  );
}
export default Product;