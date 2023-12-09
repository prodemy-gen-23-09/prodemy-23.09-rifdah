import axios from "axios";
import { useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";
import useSWR, { mutate } from "swr";
import React, { useState } from "react";
import { BeatLoader } from "react-spinners";

const HomeWithSWR = () => {
  const navigate = useNavigate();

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  // add new data
  const onClickPostData = () => {
    const payload = {
      description: "Sale",
      img: "/images/1.jpg",
      extra: [
        "/images/1.jpg",
        "/images/17.jpg",
        "/images/18.jpg",
        "/images/19.jpg",
      ],
      title: "Pleated Drawstring Pants",
      price: 550000,
      releaseDate: "2023-01-01",
      describe:
        "Known as the go-to for guest-of wedding dresses, Han Chong’s strength at Self-Portrait has always been understanding how women want to feel when they go out. This is definitely not your typical blazer. Crafted from boucle, this blazer has a slightly boxy fit and cropped hem that actually makes it so versatile. Style it with the matching skirt for the ultimate power outfit, or keep things a bit more casual and pair with medium wash high-rise denim, cream colored pumps and oversized clutch. Finish it off with small gold hoop earrings.",
    };

    axios
      .post("http://localhost:3000/products", payload)
      .then(() => {
        console.log("Success add new product!");
        mutate();
      })
      .catch((error) => console.log(error));
  };

  // use react swr to fetch data
  const getList = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/products",
    getList
  );

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="flex flex-col justify-center">
      <div className="flex justify-center gap-4">
        <button
          className="rounded-lg bg-white p-2 text-black self-center hover:text-white hover:bg-black"
          onClick={onClickPostData}
        >
          Post Data
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {isLoading ? (
          <BeatLoader color="#38BDF8" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.map(
              ({ id, title, img, description, price, releaseDate }) => (
                <ProductCard
                  key={id}
                  products={[
                    { id, title, img, description, price, releaseDate },
                  ]}
                  onClick={() => onClickCard(id)}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeWithSWR;
