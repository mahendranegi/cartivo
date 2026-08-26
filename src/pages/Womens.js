
import React, { useContext, useEffect, useState } from 'react'
import { usersContext } from '../context/ProvideContext'
import ProductInfoCard from '../components/ProductInfoCard'
import axios from 'axios';
import { Radio } from 'antd';
import Item from 'antd/es/list/Item';
import womenBg from '../images/women.webp'
import InnerBanner from '../components/InnerBanner';
import { Alert, Flex, Spin } from 'antd';

function Womens() {
  const [page,setPage] = useState(1);
  const LIMIT = 2;
  const SKIP = (page - 1) * LIMIT;
  const[womens,setWomens] = useState([])
  const [filteredWomens, setFilteredWomens] = useState([]);
  const[loading,setLoading] = useState(false)

  const{productData} = useContext(usersContext);
  useEffect(()=>{
getProductsWomens()
  },[page]);
  //  const API = "https://dummyjson.com/products/category/womens-dresses";
  const getProductsWomens = async ()=>{  

    try{
      setLoading(true)
      const [dresses,beauty,fragrances] = await Promise.all([
        axios.get(`https://dummyjson.com/products/category/womens-dresses?limit=${LIMIT}&skip=${SKIP}`),
        axios.get(`https://dummyjson.com/products/category/beauty?limit=${LIMIT}&skip=${SKIP}`),
        axios.get(`https://dummyjson.com/products/category/fragrances?limit=${LIMIT}&skip=${SKIP}`),
      ])
      const allWomenProduct = [...dresses?.data?.products,...beauty?.data?.products,...fragrances?.data?.products];
      setWomens((prev)=>[...prev,...allWomenProduct]);
      setFilteredWomens((prev)=>[...prev,...allWomenProduct]);
    }
    catch(error){
      console.log(error,'error');
      setLoading(false)
    }
    finally{
setLoading(false)
    }
  }
  const handleOnchange = (e) =>{
    const value = e.target.value;
    console.log(value,'click value____')
    let filteredItem = [];
    if(value === "0-5"){
      filteredItem = womens?.filter((item)=>{
        return item?.discountPercentage >= 0 && item?.discountPercentage <= 5
      });
    }
    if(value === "5-10"){
      filteredItem = womens?.filter((item)=>{
        return item?.discountPercentage >= 5 && item?.discountPercentage <= 10
      });
    }
    if(value === "10-15"){
      filteredItem = womens?.filter((item)=>{
        return item?.discountPercentage >= 10 && item?.discountPercentage <= 15
      });
    }
    if(value === "15-20"){
      filteredItem = womens?.filter((item)=>{
        return item?.discountPercentage >= 15 && item?.discountPercentage <= 20
      });
    }
        setFilteredWomens(filteredItem);
  }

 const getWomensProducts = () => {
   const ScrollHeight =  document.documentElement.scrollHeight;
   const ScrollTop =  document.documentElement.scrollTop;
   const InnerHeight =  window.innerHeight;
   if(InnerHeight + ScrollTop + 1 >= ScrollHeight){
    setPage((prev) => prev + 1);
    setLoading(false)
console.log(InnerHeight,ScrollTop,ScrollHeight)
   }
   
 }

 useEffect(()=>{
  window.addEventListener('scroll',getWomensProducts);

  return()=>{
    window.removeEventListener('scroll',getWomensProducts);
  }
 },[loading])
  return (
    <>
    <InnerBanner bannerImg={womenBg} />
    <div className='flexBody'>
      <div className='container'>
          <div className='leftPannel'>
             <h4>Discount Range</h4>
                  <Radio.Group onChange={(e)=>handleOnchange(e)}>
                  <Radio value="0-5">0% - 5%</Radio>
                  <Radio value="5-10">5% - 10%</Radio>
                  <Radio value="10-15">10% - 15%</Radio>
                  <Radio value="15-20">15% - 20% Above</Radio>
                </Radio.Group>
          </div>
          <div className='mainDiv'>
          <div className='productCards'>
            {filteredWomens.map((item)=>{
              return <ProductInfoCard title={item?.title} price={item?.price} image={item?.thumbnail} discount={item?.discountPercentage} />
            })}
          </div>
{loading && <div className='loadingBg'><Spin description="Loading" size="large">
       
      </Spin> </div>}          </div>
          </div>
    </div>
    </>
  )
}

export default Womens