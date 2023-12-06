import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Headline from "../components/Headline";
import Home from "../components/Home";
import { data } from "../data/data.js";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductSelection = (productId) => {
    navigate(`/detail/${productId}`);
  };

  const [products, setProducts] = useState(data);
  const [sortDate, setSortDate] = useState("newest"); // default
  const [sortPrice, setSortPrice] = useState("highest"); // default

  useEffect(() => {
    let sortedProducts = [...data];

    if (sortDate === "newest") {
      sortedProducts.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    } else if (sortDate === "oldest") {
      sortedProducts.sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      );
    }

    if (sortPrice === "highest") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortPrice === "lowest") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(sortedProducts);
  }, [sortDate, sortPrice]);

  const handleSortByPrice = () => {
    setSortPrice((prevSortPrice) =>
      prevSortPrice === "highest" ? "lowest" : "highest"
    );
    setSortDate("highest");
  };

  const handleSortByDate = () => {
    setSortDate((prevSortDate) =>
      prevSortDate === "newest" ? "oldest" : "newest"
    );
    setSortPrice("newest");
  };

  return (
    <div>
      <Home />
      <Headline />
      <div>
        <button
          className="ml-20 hover:bg-black hover:text-white"
          onClick={handleSortByPrice}
        >
          Sort by {sortPrice === "highest" ? "Lowest Price" : "Highest Price"}
        </button>
        <button
          className="m-4 hover:bg-black hover:text-white"
          onClick={handleSortByDate}
        >
          Sort by{" "}
          {sortDate === "newest"
            ? "Oldest Release Date"
            : "Newest Release Date"}
        </button>
      </div>
      <ProductCard
        products={products}
        sortOrder={sortDate}
        sortPrice={sortPrice}
        setProducts={setProducts}
        onClick={handleProductSelection}
      />
    </div>
  );
};

export default ProductList;
