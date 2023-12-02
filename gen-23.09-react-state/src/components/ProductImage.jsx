import React, { useState } from "react";

const ProductImage = () => {
  const [mainImage, setMainImage] = useState("images/6.jpg");

  const showImage = (imagePath) => {
    setMainImage(imagePath);
  };

  const imagePaths = [
    "images/6.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg",
    "images/19.jpg",
  ];

  return (
    <div>
      <div>
        <img src={mainImage} alt="" className="w-full" />
        <div className="grid grid-cols-5 gap-2 mt-2">
          {imagePaths.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-full cursor-pointer border"
              onClick={() => showImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
