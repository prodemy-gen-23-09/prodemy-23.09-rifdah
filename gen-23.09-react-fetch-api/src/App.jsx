import React from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import HomeWithSWR from "./pages/HomeWithSWR";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-Jost">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/home" element={<HomeWithSWR />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
