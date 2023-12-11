import React from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import ProductList from "./pages/ProductTable";
import ProductDetail from "./pages/ProductDetail";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeWithSWR from "./pages/HomeWithSWR";
import Cart from "./pages/Cart";
import HookForm from "./pages/HookForm";
import ProductTable from "./pages/ProductTable";
import Update from "./pages/Update";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="font-Jost">
      <CartProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeWithSWR />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/list" element={<ProductTable />} />
          <Route path="/new" element={<HookForm />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
