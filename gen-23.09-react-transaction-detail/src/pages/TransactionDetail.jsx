import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { toRupiah } from "../utils/formatter";

function TransactionDetail() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/booking/${id}`);
        const foundTransaction = response.data;

        if (foundTransaction) {
          setTransaction(foundTransaction);
        } else {
          setError("No transaction found");
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Data not found");
        } else {
          setError(error.response?.data || error.message || "Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <BeatLoader color="#38BDF8" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!transaction) {
    return <p>No transaction found</p>;
  }

  return (
    <div className="container grid grid-cols-2 gap-6">
      <div>
        {transaction.productImage && (
          <img src={transaction.productImage} alt="" className="w-full" />
        )}
      </div>
      <div>
        <h2 className="mt-10 text-3xl font-medium capitalize mb-2">
          {transaction.productName}
        </h2>
        <div className="flex items-baseline mb-1 space-x-2 font-Jost mt-4">
          <p className="text-2xl text-primary font-semibold">
            {toRupiah(transaction.price)}
          </p>
        </div>
        <p className="mt-2 text-gray-600 text-justify">
          <strong>User Name:</strong> {transaction.userName}
        </p>
        <p className="mt-2 text-gray-600 text-justify">
          <strong>User City:</strong> {transaction.userCity}
        </p>
        <p className="mt-2 text-gray-600 text-justify">
          <strong>Order Date:</strong> {transaction.orderDate}
        </p>
        <p className="mt-2 text-gray-600 text-justify">
          <strong>Quantity:</strong> {transaction.quantity}
        </p>
        <p className="mt-2 text-gray-600 text-justify">
          <strong>Delivery:</strong> {transaction.delivery}
        </p>
        <p className="mt-2 text-gray-600 text-justify">
          <strong>Payment:</strong> {transaction.payment}
        </p>
        <p className="mt-2 text-gray-600 text-justify">
          <strong>Total:</strong> {toRupiah(transaction.total)}
        </p>
      </div>
    </div>
  );
}

export default TransactionDetail;
