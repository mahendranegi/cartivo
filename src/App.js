
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Layout from './layout/Layout'
import { useEffect, useState } from 'react';
function App() {
  
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />}/>
       <Route path="/product-details" element={<ProductDetails />}/>
        {/* <Route path="/" element={<Home />}/> */}
      
      </Route>
    </Routes>
  );
}

export default App;
