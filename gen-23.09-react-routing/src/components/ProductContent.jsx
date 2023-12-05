import {
  IconHeart,
  IconShoppingBag,
  IconStarFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";

const ProductContent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl font-medium capitalize mb-2">
          Boucle Cropped Jacket
        </h2>
        <div className="flex items-center mb-4">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <IconStarFilled size={20} />
            </span>
            <span>
              <IconStarFilled size={20} />
            </span>
            <span>
              <IconStarFilled size={20} />
            </span>
            <span>
              <IconStarFilled size={20} />
            </span>
            <span>
              <IconStarFilled size={20} />
            </span>
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
            <span className="text-gray-600">Self Portrait</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Category : </span>
            <span className="text-gray-600">Clothing</span>
          </p>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-Jost mt-4">
          <p className="text-2xl text-primary font-semibold">Rp 690.000,00</p>
          <p className="text-base text-gray-400 line-through">Rp 750.000,00</p>
        </div>
        <h3 className="mt-4 uppercase font-semibold">Editor's Note</h3>
        <p className="mt-2 text-gray-600 text-justify">
          Known as the go-to for guest-of wedding dresses, Han Chong’s strength
          at Self-Portrait has always been understanding how women want to feel
          when they go out.
          <br />
          <br />
          This is definitely not your typical blazer. Crafted from boucle, this
          blazer has a slightly boxy fit and cropped hem that actually makes it
          so versatile. Style it with the matching skirt for the ultimate power
          outfit, or keep things a bit more casual and pair with medium wash
          high-rise denim, cream colored pumps and oversized clutch. Finish it
          off with small gold hoop earrings.
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
    </div>
  );
};

export default ProductContent;
