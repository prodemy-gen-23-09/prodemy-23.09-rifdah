import React from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-Jost">
      <Header />
      <Nav />
      <Routes>
        <Route path="/home" element={<ProductList />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
