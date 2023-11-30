import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  return (
    <div className='font-Jost'>
      <Navbar /> 
      <Hero />
      <HeadlineCards />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
