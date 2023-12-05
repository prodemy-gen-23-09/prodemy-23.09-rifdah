import React from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="font-Jost">
      <Header />
      <Nav />
      <ProductDetail />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
