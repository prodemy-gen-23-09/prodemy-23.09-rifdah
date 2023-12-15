import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import useSWR, { mutate } from "swr";
import Card from "../components/Card";
import Headline from "../components/Headline";
import Banner from "../components/Banner";

function Home() {
  const navigate = useNavigate();

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };
  const [sortDate, setSortDate] = useState("newest");
  const [sortPrice, setSortPrice] = useState("highest");

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

  const handleProductSelection = (productId) => {
    navigate(`/detail/${productId}`);
  };

  const getProducts = (url) => axios.get(url).then((response) => response.data);

  const {
    data: products,
    isLoading,
    error,
    mutate: mutateProducts,
  } = useSWR("http://localhost:3000/products", getProducts, {
    onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
  });

  useEffect(() => {
    if (products) {
      let sortedProducts = [...products];

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

      mutateProducts(sortedProducts, false);
    }
  }, [sortDate, sortPrice, mutateProducts, products]);

  // SWR
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
        mutateProducts();
      })
      .catch((error) => console.log(error));
  };

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <section className="flex flex-col justify-center">
      <Banner />
      <Headline />
      <div className="flex justify-center gap-4">
        <button
          className="rounded-lg bg-white p-2 text-black self-center hover:text-white hover:bg-black"
          onClick={onClickPostData}
        >
          Post Data
        </button>
      </div>
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
      <div className="flex justify-center gap-4 mt-8">
        {isLoading ? (
          <BeatLoader color="#38BDF8" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products?.map(
              ({ id, title, img, description, price, releaseDate }) => (
                <Card
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
}

export default Home;
