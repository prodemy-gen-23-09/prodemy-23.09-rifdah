import React from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import Detail from "./pages/Detail";
import Header from "./layouts/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductForm from "./pages/admin/ProductForm";
import ProductList from "./pages/admin/ProductList";
import Update from "./pages/admin/Update";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Checkout from "./pages/Checkout";
import GuestRoutes from "./components/route/GuestRoutes";
import PrivateRoutes from "./components/route/PrivateRoutes";
import { Dashboard } from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div className="font-Jost">
      <Layout>
        <Routes>
          <Route path="/registration" element={<Registration />} />

          <Route element={<GuestRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/new" element={<ProductForm />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
