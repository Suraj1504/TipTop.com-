import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import NextPage from "./NextPage";
import NoMatching from "./NoMatching";
import { getProductList } from "./Api";
import Loading from "./Loading";

function ProductListPage({ d }) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    const p = getProductList();

    p.then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "title") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  } else if (sort == "priceLow") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "priceHigh") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="my-8 px-9 py-12.5 max-w-6xl mx-auto bg-white shadow">
        <div className="flex flex-col gap-4 my-16 md:flex-row place-content-between">
          <input
            className="p-2 border border-gray-700 rounded-md"
            onChange={handleQueryChange}
            value={query}
            placeholder="search"
          />
          <select
            className="p-2 border border-gray-700 rounded-md"
            onChange={handleSortChange}
            value={sort}
          >
            <option value="default">Default Sort</option>
            <option value="title">Sort by title</option>
            <option value="priceLow">Sort by price: low to high</option>
            <option value="priceHigh">Sort by price: high to low</option>
          </select>
        </div>
        {data.length > 0 && <ProductList products={data} discount={d} />}
        {data.length == 0 && <NoMatching>Not found!</NoMatching>}
        <div className="flex gap-0.5 ml-5">
          <NextPage name="1" />
          <NextPage name="2" />
          <NextPage name=">" />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
