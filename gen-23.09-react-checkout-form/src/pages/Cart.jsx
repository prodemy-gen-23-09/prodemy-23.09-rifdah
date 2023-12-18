import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { removeFromCart } from "../store/reducers/cartSlice";
import { toRupiah } from "../utils/formatter";
import { checkoutBooking } from "../store/reducers/checkoutSlice";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [dataCart, setDataCart] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userId = user ? user.email : "";
        const response = await axios.get(
          `http://localhost:3000/cart?userId=${userId}`
        );
        setDataCart(response.data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [user]);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${itemId}`);
      setDataCart((prevData) => prevData.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const onClickBuyNow = async () => {
    if (dataCart.length > 0) {
      try {
        await axios.post("http://localhost:3000/cart", dataCart);
        dispatch(checkoutBooking(dataCart));
        navigate("/checkout");
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    }
  };

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
                  {dataCart.map(
                    (item) =>
                      user &&
                      user.email === item.userId && (
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
                          <td className="py-2">{item.quantity}</td>
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
                              {toRupiah(item.quantity * item.price)}
                            </span>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
              <button
                className="rounded-lg bg-sky-400 p-2 text-white w-fit border-white"
                onClick={onClickBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
