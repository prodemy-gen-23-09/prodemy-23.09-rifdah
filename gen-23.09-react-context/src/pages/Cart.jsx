import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { toRupiah } from "../utils/formatter";
import axios from "axios";
import useSWR from "swr";
import { data } from "../data/data";

const Cart = () => {
  const { dataCart } = useContext(CartContext);
  console.log(dataCart);
  const [qty, setQty] = useState(1);

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  // const { data, isLoading, error, mutate } = useSWR(
  //   "http://localhost:3000/addtocart",
  //   (url) => axios.get(url).then((response) => response.data)
  // );

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`http://localhost:3000/addtocart/${id}`)
  //     .then((res) => {
  //       // Refresh data after successful deletion
  //       mutate();
  //     })
  //     .catch((error) => {
  //       console.log("Error deleting product:", error);
  //     });
  // };

  return (
    <div className="container mt-5">
      <div className="grid grid-cols-1 items-center text-center justify-center">
        <div className="col-span-1">
          <div className="bg-white shadow-md p-6 rounded-md">
            <div className="mb-4 flex justify-between items-center">
              <h4 className="text-lg font-semibold">Products Cart</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Product Name</th>
                    <th className="px-4 py-2">Product Image</th>
                    <th className="px-4 py-2">Product Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Remove</th>
                    <th className="px-4 py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">{dataCart.title}</td>
                    <td className="py-2">
                      <div className="flex justify-center items-center">
                        <img
                          src={dataCart.img}
                          alt={`Product ${dataCart.id} Image`}
                          className="w-28 h-auto object-center"
                        />
                      </div>
                    </td>
                    <td className="py-2">{toRupiah(dataCart.price)}</td>
                    <td className="py-2">{dataCart.qty}</td>
                    <td className="py-2">
                      <button
                        className="rounded-lg border border-white bg-red-600 p-2 text-white self-center hover:bg-red-700"
                        onClick={() => handleDelete(dataCart.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td className="py-2">
                      <span className="font-bold">
                        {toRupiah(dataCart.qty * dataCart.price)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
