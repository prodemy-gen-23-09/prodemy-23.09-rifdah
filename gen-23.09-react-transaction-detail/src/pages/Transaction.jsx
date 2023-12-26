import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import { toRupiah } from "../utils/formatter";
import { Link } from "react-router-dom";

function Transaction() {
  const user = useSelector((state) => state.auth.user);
  const userId = user ? user.email : "";
  const { data, isLoading, error, mutate } = useSWR(
    `http://localhost:3000/booking?userId=${userId}`,
    (url) => axios.get(url).then((response) => response.data.flat())
  );

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/booking?userId=${userId}`
        );
        const flattenedData = response.data.flat();
        mutate(flattenedData);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };
    fetchTransactionData();
  }, [userId, mutate]);

  return (
    <div className="container mt-5">
      {isLoading ? (
        <BeatLoader color="#38BDF8" />
      ) : (
        <div className="grid grid-cols-1 items-center text-center justify-center">
          <div className="col-span-1">
            <div className="bg-white shadow-md p-6 rounded-md">
              <div className="mb-4 flex justify-between items-center">
                <h4 className="text-lg font-semibold">Transaction History</h4>
              </div>
              <div className="overflow-x-auto">
                {Array.isArray(data) && data.length > 0 ? (
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">User Name</th>
                        <th className="px-4 py-2">User City</th>
                        <th className="px-4 py-2">Product Name</th>
                        <th className="px-4 py-2">Product Image</th>
                        <th className="px-4 py-2">Order Date</th>
                        <th className="px-4 py-2">Quantity</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Delivery Method</th>
                        <th className="px-4 py-2">Payment Method</th>
                        <th className="px-4 py-2">Total</th>
                        <th className="px-4 py-2">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((transaction, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-2">{transaction.userName}</td>
                          <td className="py-2">{transaction.userCity}</td>
                          <td className="py-2">{transaction.productName}</td>
                          <td className="py-2">
                            <img
                              src={transaction.productImage}
                              alt={transaction.productName}
                              className="w-28 h-auto object-center"
                            />
                          </td>
                          <td className="py-2">{transaction.orderDate}</td>
                          <td className="py-2">{transaction.quantity}</td>
                          <td className="py-2">
                            {toRupiah(transaction.price)}
                          </td>
                          <td className="py-2">{transaction.delivery}</td>
                          <td className="py-2">{transaction.payment}</td>
                          <td className="py-2">
                            {toRupiah(transaction.total)}
                          </td>
                          <td className="py-2">
                            <Link
                              className="rounded-lg bg-lime-600 p-2 text-white self-center hover:bg-lime-700"
                              to={`/transactiondetail/${transaction.id}`}
                            >
                              Detail
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No transaction history available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transaction;
