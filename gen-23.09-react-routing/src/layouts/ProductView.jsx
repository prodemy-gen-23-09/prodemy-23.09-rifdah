import React from "react";
import ProductImage from "../components/ProductImage";
import ProductContent from "../components/ProductContent";
import ProductDescription from "../components/ProductDescription";

const ProductView = () => {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-6">
        <ProductImage />
        <ProductContent />
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductView;
