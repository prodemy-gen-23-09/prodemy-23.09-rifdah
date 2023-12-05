import React from "react";
import ProductContent from "../components/ProductContent";
import { data } from "../data/data.js";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const selectedProduct = data.find((product) => product.id === parseInt(id));

  if (!selectedProduct) {
    return <div></div>;
  }

  return (
    <div>
      <ProductContent products={[selectedProduct]} />
    </div>
  );
};

export default ProductDetail;
