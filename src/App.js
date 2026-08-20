
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Layout from './layout/Layout'
import { useEffect, useState } from 'react';
import ViewCart from './pages/ViewCart';
import Login from './pages/Login';
function App() {
  
  return (
    <Routes>
       <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
      <Route path="/" element={<Home />}/>
       <Route path="/product-details" element={<ProductDetails />}/>
       <Route path="/cart" element={<ViewCart />} />
       
        {/* <Route path="/" element={<Home />}/> */}
      
      </Route>
    </Routes>
  );
}

export default App;
