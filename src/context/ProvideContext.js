import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const usersContext = createContext("");


function ProvideContext({ children }) {
  const [productData, setProductData] = useState([]);
  const [clickId, setClickId] = useState([])
  const [value, setValue] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(1);
  useEffect(() => {
    console.log(clickId, "CART ITEMS");
  }, [clickId]);

  const API = "https://dummyjson.com/products";

  const getProducts = async (url) => {
    const res = await axios.get(url);
    const data = await res.data.products;
    setProductData(data)
    console.log(res, 'res', data)
  }
  useEffect(() => {
    getProducts(API);

  }, []);

const handleInfiniteScroll = () =>{
  console.log("first")
}

  //window scroll lazy loading
  useEffect(()=>{
    window.addEventListener("scorll",handleInfiniteScroll);
  },[])
  //Add to Cart

  const addToCart = (id, products, setNotify) => {
    console.log(id, 'yessss', products)
    const alreadyExists = clickId.some((item) => item.id === id);
    if (alreadyExists) {
      return;
    }
    setClickId((prev) => [...prev,
    {
      ...products,
      quantity: 1,
    },
    ]);
    setValue((prev) => { return prev + 1;  setNotify(true) });
    console.log(id, 'yessss');
   
  }


  return (
    <usersContext.Provider value={{ productData, setProductData, addToCart, value, clickId, setClickId, setValue }}>
      {children}
    </usersContext.Provider>
  )
}

export default ProvideContext