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

function App() {
  return (
    <div className="font-Jost">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/new" element={<ProductForm />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
