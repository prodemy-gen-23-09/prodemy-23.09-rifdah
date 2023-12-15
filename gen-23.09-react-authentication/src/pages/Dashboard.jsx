import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const userRole = useSelector((state) => state.auth.user?.role);
  const user = useSelector((state) => state.auth.user);

  if (userRole !== "admin" && userRole !== "user") {
    return (
      <div className="flex items-center justify-center">
        Unauthorized access
      </div>
    );
  }

  return (
    <div className="my-8 text-center">
      {userRole === "admin" && (
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome back, Admin</h1>
          <p>Easily manage your data from here</p>
        </div>
      )}

      {userRole === "user" && (
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome back, User</h1>
          <p>Easily manage your data from here</p>
        </div>
      )}

      {userRole === "admin" && (
        <div className="flex justify-center items-center w-full">
          <div className="w-96 bg-white text-primary content">
            <div className="body text-black m-5">
              <h4 className="text-2xl font-bold mb-2">Products</h4>
              <p className="mb-4">Manage all the products here.</p>
              <Link
                className="rounded-lg bg-lime-600 p-2 text-white hover:bg-lime-700"
                to="/list"
              >
                Manage
              </Link>
              <p className="mb-4 mt-4">See more products in this store</p>
              <Link
                to="/home"
                className="rounded-lg bg-lime-600 p-2 text-white hover:bg-lime-700"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      )}

      {userRole === "user" && (
        <div className="flex justify-center items-center w-full">
          <div className="w-96 bg-white text-primary content">
            <div className="body text-black m-5">
              <h4 className="text-2xl font-bold mb-2">Products</h4>
              <p className="mb-4">See more products in this store</p>
              <Link
                to="/home"
                className="rounded-lg bg-lime-600 p-2 text-white hover:bg-lime-700"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
