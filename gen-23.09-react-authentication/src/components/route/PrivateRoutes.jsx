import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

export default function PrivateRoutes() {
  const isNotLogin = useSelector((state) => state.auth.token === "");

  if (isNotLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
  // return <AdminRoutes />;
}
