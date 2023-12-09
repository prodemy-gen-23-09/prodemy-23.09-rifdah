import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: "",
    image: "",
    price: "",
    releaseDate: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/addproduct/" + id)
      .then((res) => {
        setValues({
          ...values,
          name: res.data.name,
          image: res.data.image,
          price: res.data.price,
          releaseDate: res.data.releaseDate,
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/addproduct/" + id, values)
      .then((res) => {
        navigate("/list");
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="px-20">
      <h1 className="text-3xl font-semibold">Update Product Form</h1>
      <div className="grid grid-cols-2 gap-20 mt-8">
        <div className="w-[500px]">
          <h2>New Product</h2>
          <hr />
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit}
            // encType="multipart/form-data"
          >
            <div>
              <label htmlFor="name">Product Name</label>
              <input
                placeholder="Product Name"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                // {...register("name")}
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                id="name"
              />

              {/* <p className="error">{errors.name?.message}</p> */}
            </div>

            <div>
              <label htmlFor="image">Product Image</label>
              <input
                placeholder="Product Image"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                // {...register("image")}
                value={values.image}
                onChange={(e) =>
                  setValues({ ...values, image: e.target.value })
                }
                id="image"
              />

              {/* <p className="error">{errors.image?.message}</p> */}
            </div>

            <div>
              <label htmlFor="price">Product Price</label>
              <input
                placeholder="Product Price"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                // {...register("price")}
                value={values.price}
                onChange={(e) =>
                  setValues({ ...values, price: e.target.value })
                }
                id="price"
              />
              {/* <p className="error">{errors.price?.message}</p> */}
            </div>

            <div>
              <label htmlFor="releaseDate">Product Release Date</label>
              <input
                placeholder="Product Release Date"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                // {...register("releaseDate")}
                value={values.releaseDate}
                onChange={(e) =>
                  setValues({ ...values, releaseDate: e.target.value })
                }
                id="releaseDate"
              />
              {/* <p className="error">{errors.releaseDate?.message}</p> */}
            </div>
            <button
              className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
              type="submit"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Update;
