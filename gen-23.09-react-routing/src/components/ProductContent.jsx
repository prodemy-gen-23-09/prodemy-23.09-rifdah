import {
  IconHeart,
  IconShoppingBag,
  IconStarFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";

const ProductContent = (props) => {
  const [mainImage, setMainImage] = useState(props.products[0].img);
  const [count, setCount] = useState(0);
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(amount);
  };

  const showImage = (extraImage) => {
    setMainImage(extraImage);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {props.products.map((product) => (
        <div className="container grid grid-cols-2 gap-6">
          <div key={product.id}>
            <img src={mainImage} alt="" className="w-full" />
            <div className="grid grid-cols-5 gap-2 mt-2">
              <img
                src={product.extra1}
                alt=""
                className="w-full cursor-pointer border"
                onClick={() => showImage(product.extra1)}
              />
              <img
                src={product.extra2}
                alt=""
                className="w-full cursor-pointer border"
                onClick={() => showImage(product.extra2)}
              />
              <img
                src={product.extra3}
                alt=""
                className="w-full cursor-pointer border"
                onClick={() => showImage(product.extra3)}
              />
              <img
                src={product.extra4}
                alt=""
                className="w-full cursor-pointer border"
                onClick={() => showImage(product.extra4)}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-medium capitalize mb-2">
              {product.title}
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex gap-1 text-sm text-yellow-400">
                <IconStarFilled size={20} />
                <IconStarFilled size={20} />
                <IconStarFilled size={20} />
                <IconStarFilled size={20} />
                <IconStarFilled size={20} />
              </div>
              <div className="font-semibold text-gray-500 ml-3">(5.0)</div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-800 font-semibold space-x-2">
                <span>Availability : </span>
                <span className="text-green-600">In Stock</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Brand : </span>
                <span className="text-gray-600">{product.title}</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Category : </span>
                <span className="text-gray-600">{product.title}</span>
              </p>
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-Jost mt-4">
              <p className="text-2xl text-primary font-semibold">
                {formatCurrency(Number(product.price))}
              </p>
            </div>
            <h3 className="mt-4 uppercase font-semibold">Editor's Note</h3>
            <p className="mt-2 text-gray-600 text-justify">
              {product.describe}
            </p>

            <div className="mt-4">
              <h3 className="text-sm text-gray-800 uppercase font-semibold mb-3">
                Quantity
              </h3>
              <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <div
                  className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                  onClick={decrement}
                >
                  -
                </div>
                <div className="h-8 w-8 text-xl flex items-center justify-center">
                  {count}
                </div>
                <div
                  className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                  onClick={increment}
                >
                  +
                </div>
              </div>
            </div>

            <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
              <a
                href="#"
                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:shadow-xl transition"
              >
                <IconShoppingBag size={20} /> Add to cart
              </a>
              <a
                href="#"
                className="border border-gray-300 text-gray-600 text-primary px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:shadow-xl"
              >
                <IconHeart size={20} /> Wishlist
              </a>
            </div>
          </div>

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
      ))}
    </div>
  );
};

export default ProductContent;
