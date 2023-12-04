import React from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";

function App() {
  return (
    <div className="font-Jost">
      <Header />
      <Nav />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
