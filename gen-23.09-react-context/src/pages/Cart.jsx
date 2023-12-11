import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { toRupiah } from "../utils/formatter";
import axios from "axios";
import { data } from "../data/data";

const Cart = () => {
  const { dataCart, setDataCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/addtocart")
      .then((response) => {
        setDataCart(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch cart data from db.json:", error);
      });
  }, []);

  const handleDelete = (itemId) => {
    axios
      .delete(`http://localhost:3000/addtocart/${itemId}`)
      .then((response) => {
        console.log("Item successfully deleted:", response.data);
        axios
          .get("http://localhost:3000/addtocart")
          .then((response) => {
            setDataCart(response.data);
          })
          .catch((error) => {
            console.error("Failed to fetch cart data from db.json:", error);
          });
      })
      .catch((error) => {
        console.error("Failed to delete item from db.json:", error);
      });
  };

  if (!Array.isArray(dataCart)) {
    return <p>Waiting...</p>;
  }

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
                  {dataCart.map((item) => (
                    <tr key={item.id} className="text-center">
                      <td className="py-2">{item.title}</td>
                      <td className="py-2">
                        <div className="flex justify-center items-center">
                          <img
                            src={item.img}
                            alt={`Product ${item.id} Image`}
                            className="w-28 h-auto object-center"
                          />
                        </div>
                      </td>
                      <td className="py-2">{toRupiah(item.price)}</td>
                      <td className="py-2">{item.qty}</td>
                      <td className="py-2">
                        <button
                          className="rounded-lg border border-white bg-red-600 p-2 text-white self-center hover:bg-red-700"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td className="py-2">
                        <span className="font-bold">
                          {toRupiah(item.qty * item.price)}
                        </span>
                      </td>
                    </tr>
                  ))}
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
