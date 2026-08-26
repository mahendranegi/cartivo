
import React, { useContext, useEffect, useState } from 'react'
import { usersContext } from '../context/ProvideContext'
import ProductInfoCard from '../components/ProductInfoCard'
import axios from 'axios';
import { Radio } from 'antd';
import Item from 'antd/es/list/Item';
import womenBg from '../images/women.webp'
import InnerBanner from '../components/InnerBanner';
function Womens() {
  const[womens,setWomens] = useState([])
  const [filteredWomens, setFilteredWomens] = useState([]);

  const{productData} = useContext(usersContext);
  useEffect(()=>{
getProductsWomens()
  },[]);
  //  const API = "https://dummyjson.com/products/category/womens-dresses";
  const getProductsWomens = async ()=>{  

    try{
      const [dresses,beauty,fragrances] = await Promise.all([
        axios.get('https://dummyjson.com/products/category/womens-dresses'),
        axios.get('https://dummyjson.com/products/category/beauty'),
        axios.get('https://dummyjson.com/products/category/fragrances'),
      ])
      const allWomenProduct = [...dresses?.data?.products,...beauty?.data?.products,...fragrances?.data?.products];
      setWomens(allWomenProduct);
      setFilteredWomens(allWomenProduct)
    }
    catch(error){
      console.log(error,'error')
    }
    finally{

    }
  }
  const handleOnchange = (e) =>{
    // console.log(e.target.value,'Hello');
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
          </div>
          </div>
    </div>
    </>
  )
}

export default Womens