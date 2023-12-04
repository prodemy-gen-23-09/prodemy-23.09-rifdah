import React, { useState } from "react";

const ProductImage = () => {
  const [mainImage, setMainImage] = useState("images/6.jpg");

  const showImage = (extraImage) => {
    setMainImage(extraImage);
  };

  const extraImages = [
    {
      id: 1,
      extra: "images/6.jpg",
    },
    {
      id: 2,
      extra: "images/16.jpg",
    },
    {
      id: 3,
      extra: "images/17.jpg",
    },
    {
      id: 4,
      extra: "images/18.jpg",
    },
    {
      id: 5,
      extra: "images/19.jpg",
    },
  ];

  return (
    <div>
      <div>
        <img src={mainImage} alt="" className="w-full" />
        <div className="grid grid-cols-5 gap-2 mt-2">
          {extraImages.map((image) => (
            <img
              key={image.id}
              src={image.extra}
              alt=""
              className="w-full cursor-pointer border"
              onClick={() => showImage(image.extra)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
