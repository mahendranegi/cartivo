
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Layout from './layout/Layout'
import { useEffect, useState } from 'react';
import ViewCart from './pages/ViewCart';
import Login from './pages/Login';
import Lenis from "lenis";
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Kids from './pages/Kids';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <Routes>
       <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
      <Route path="/" element={<Home />}/>
       <Route path="/product-details" element={<ProductDetails />}/>
       <Route path="/cart" element={<ViewCart />} />
       <Route path="/mens" element={<Mens />} />
       <Route path="/womens" element={<Womens />} />
       <Route path="/kids" element={<Kids />} />
        {/* <Route path="/" element={<Home />}/> */}
      
      </Route>
    </Routes>
  );
}

export default App;
