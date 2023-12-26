import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toRupiah } from "../utils/formatter";
import { useNavigate } from "react-router";
import { checkoutBooking } from "../store/reducers/checkoutSlice";
import { removeFromCart } from "../store/reducers/cartSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { dataCheckout } = useSelector((state) => state.checkout) || {
    dataCheckout: [],
  };
  const { cart } = useSelector((state) => state.cart) || { cart: [] };
  const generateUniqueId = () => {
    return Date.now().toString();
  };

  useEffect(() => {
    console.log("Email Pengguna:", user?.email); // gunakan optional chaining untuk menghindari error jika user null atau undefined
    console.log("Data Checkout sebelum Filter:", cart);

    const filteredData =
      cart && user ? cart.filter((item) => user.email === item.userId) : [];

    console.log("Data Checkout yang Difilter:", filteredData);

    setDataCart(filteredData);
  }, [user, cart]);

  const [dataCart, setDataCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart");
        const userCart = response.data.filter(
          (item) => user.email === item.userId
        );
        setDataCart(userCart);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    city: yup.string().required("City is required"),
    orderDate: yup
      .string()
      .required("Order Date is Required")
      .matches(
        /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
        "Invalid Date Format (YYYY-MM-DD)"
      ),
    delivery: yup.string().required("Delivery Method is required"),
    wrap: yup.boolean(),
    payment: yup.string().required("Payment Method is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data) => {
    const payload = dataCart.map((item) => ({
      userName: data.name,
      userEmail: data.email,
      userCity: data.city,
      orderDate: data.orderDate,
      delivery: data.delivery,
      payment: data.payment,
      wrap: data.wrap,
      productName: item.title,
      productImage: item.img,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
      userId: user ? user.email : "",
      id: generateUniqueId(),
    }));

    dispatch(checkoutBooking(payload));

    try {
      await axios.post("http://localhost:3000/booking", payload);
      dataCart.forEach((item) => dispatch(removeFromCart(item.id)));
      alert("Successfully checkout!");
      reset();
      navigate("/home");
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Error during checkout. Please try again later.");
    }
  };

  return (
    <section className="px-20">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <div className="grid grid-cols-2 gap-20 mt-8">
        <div className="w-[500px]">
          <h2>Shipping Details</h2>
          <hr />
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("name")}
                id="name"
              />
              <p className="error">{errors.name?.message}</p>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("email")}
                id="email"
              />
              <p className="error">{errors.email?.message}</p>
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input
                placeholder="City"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("city")}
                id="city"
              />
              <p className="error">{errors.city?.message}</p>
            </div>

            <div>
              <label htmlFor="orderDate">Order Date</label>
              <input
                placeholder="Order Date"
                className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
                {...register("orderDate")}
                id="orderDate"
              />
              <p className="error">{errors.orderDate?.message}</p>
            </div>

            <div>
              <label htmlFor="orderDate">Delivery Method</label>
              <div className="flex gap-8 mt-1">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="delivery"
                    {...register("delivery")}
                    value="JNP Same Day"
                  />
                  <label htmlFor="delivery">JNP Same Day</label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="delivery"
                    {...register("delivery")}
                    value="J&P Express"
                  />
                  <label htmlFor="delivery">J&P Express</label>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" {...register("wrap")} id="wrap" />
              <label htmlFor="wrap">Extra Wrap</label>
            </div>

            <div className="flex gap-2">
              <select
                placeholder="Payment Method"
                className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-300 text-gray-700 sm:text-sm"
                {...register("payment")}
                id="payment"
              >
                <option value="">Please select</option>
                <option value="Mobile Banking">Mobile Banking</option>
                <option value="E-Wallet">E-Wallet</option>
              </select>
              <label htmlFor="payment">Payment Method</label>
              <p className="error">{errors.payment?.message}</p>
            </div>

            <button
              className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
              type="submit"
            >
              Purchase
            </button>
          </form>
        </div>
        <div>
          <h2>Your Order</h2>
          <hr />
          <div className="flex flex-col">
            {dataCart.map((item) => (
              <div key={item.id} className="flex justify-between my-4">
                <img src={item.img} alt="foto" className="w-20" />
                <h3 className="font-bold">{item.title}</h3>
                <p className="font-semibold">{item.description}</p>
                <span>{item.quantity}</span>
                <span>{toRupiah(item.price)}</span>
                <span>{toRupiah(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <hr />

          <div className="flex justify-between mt-4">
            <span className="font-bold">Total</span>
            <span className="font-bold">
              {toRupiah(
                dataCart.reduce(
                  (total, item) => total + item.quantity * item.price,
                  0
                )
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
