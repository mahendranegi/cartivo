
import React, { useContext, useEffect, useState } from 'react'
import { usersContext } from '../context/ProvideContext'
import ProductInfoCard from '../components/ProductInfoCard'
import axios from 'axios';
import { Radio } from 'antd';
import Item from 'antd/es/list/Item';
function Womens() {
  const[womens,setWomens] = useState([])
  const{productData} = useContext(usersContext);
  useEffect(()=>{
getProductsWomens()
  },[]);
  //  const API = "https://dummyjson.com/products/category/womens-dresses";
  const getProductsWomens = async ()=>{  

    try{
    const res = await fetch("https://dummyjson.com/products/category/womens-dresses");
      const data = await res.json();
      setWomens(data?.products)
      console.log(data?.products,'women data____-')
    }
    catch(error){
      console.log(error,'error')
    }
    finally{

    }
  }
  return (
    <div className='mainDiv'>
          <div>
             <h4>Discount Range</h4>
                  <Radio.Group >
                  <Radio value="0-5">0% - 5%</Radio>
                  <Radio value="5-10">5% - 10%</Radio>
                  <Radio value="10-15">10% - 15%</Radio>
                  <Radio value="15+">15% & Above</Radio>
                </Radio.Group>
          </div>
          <div className='productCards'>
            {womens.map((item)=>{
              return <ProductInfoCard title={item?.title} price={item?.price} image={item?.thumbnail} discount={item?.discountPercentage} />
            })}
          </div>
    </div>
  )
}

export default Womens