import React from "react";

const ProductDescription = () => {
  return (
    <div>
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 text-gray-800 pb-3 font-semibold uppercase mt-4">
          Product Details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600 space-y-3">
            <li>Button front closure</li>
            <li>Composition: boucle</li>
            <li>Dry clean only</li>
            <li>Imported</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
