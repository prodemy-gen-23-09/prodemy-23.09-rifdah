import React, { useContext, useState } from "react";
import {
  IconHeart,
  IconShoppingBag,
  IconStarFilled,
} from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import useSWR from "swr";
import { BeatLoader } from "react-spinners";
import { toRupiah } from "../utils/formatter";

const fetcher = (url) => axios.get(url).then((response) => response.data);

const ProductContent = (props) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id from the route parameters
  const { setDataCart } = useContext(CartContext);

  // Move the declaration of 'data' here
  const { data, isLoading } = useSWR(
    `http://localhost:3000/products/${id}`,
    fetcher
  );

  const [mainImage, setMainImage] = useState(data ? data.img : "");
  const [qty, setQty] = useState(1);

  if (isLoading) return <BeatLoader color="#38BDF8" />;

  const showImage = (extraImage) => {
    setMainImage(extraImage);
  };

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const onClickAddToCart = async () => {
    if (data) {
      const payload = {
        id: data.id,
        title: data.title,
        img: data.img,
        price: data.price,
        qty,
        total: data.price * qty,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/addtocart",
          payload
        );
        setDataCart(response.data);
        navigate("/cart");
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id} className="container grid grid-cols-2 gap-6">
          <div>
            <img src={mainImage || data.img || ""} alt="" className="w-full" />
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
                {toRupiah(product.price)}
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
              <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max items-center justify-center text-center">
                <button
                  className="h-8 w-8 text-xl border-gray-300 text-gray-600  flex items-center justify-center cursor-pointer select-none"
                  onClick={decrementQty}
                >
                  -
                </button>
                <input
                  type="number"
                  name="qty"
                  value={qty}
                  disabled
                  className="h-8 w-8 text-xl border-gray-300 text-gray-600 flex items-center justify-center text-center"
                />
                <button
                  className="h-8 w-8 text-xl border-gray-300 text-gray-600  flex items-center justify-center cursor-pointer select-none"
                  onClick={incrementQty}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
              <button
                type="submit"
                onClick={onClickAddToCart}
                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:shadow-xl transition"
              >
                <IconShoppingBag size={20} /> Add to cart
              </button>
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
