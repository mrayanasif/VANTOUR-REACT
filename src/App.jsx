import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Products from './components/Products/Products';
import ReviewCards from './components/ReviewCards/ReviewCard';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <ProductShowcase />
      <Products />
      <ReviewCards />
      <Footer />
    </div>
  );
}

export default App;
