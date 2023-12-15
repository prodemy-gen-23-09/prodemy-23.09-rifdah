import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const AdminRoutes = ({ ...rest }) => {
  const userRole = useSelector((state) => state.auth.user?.role);

  return userRole === "admin" ? <Route {...rest} /> : <Navigate to="/" />;
};

export default AdminRoutes;
