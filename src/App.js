
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Layout from './layout/Layout'
import { useEffect, useState } from 'react';
function App() {
  const[productData,setProductData]= useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/products").then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data.products,'data_____');
      setProductData(data.products)
    }).catch((error)=>{
      console.log(error,'___error')
    })
  },[])
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home productData={productData} />}/>
       <Route path="/product-details" element={<ProductDetails />}/>
        {/* <Route path="/" element={<Home />}/> */}
      Hellow
      </Route>
    </Routes>
  );
}

export default App;
