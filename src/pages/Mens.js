import React, { useContext, useEffect, useState } from 'react'
import { usersContext } from '../context/ProvideContext'
import ProductInfoCard from '../components/ProductInfoCard'
import axios from 'axios';

function Mens() {
    const [mensProducts, setMensProducts] = useState([]);

  useEffect(() => {
    const fetchMensProducts = async () => {
      try {
        const [shirts, shoes, watches] = await Promise.all([
          axios.get('https://dummyjson.com/products/category/mens-shirts'),
          axios.get('https://dummyjson.com/products/category/mens-shoes'),
          axios.get('https://dummyjson.com/products/category/mens-watches')
        ]);

        const allMensProducts = [
          ...shirts.data.products,
          ...shoes.data.products,
          ...watches.data.products
        ];

        setMensProducts(allMensProducts);

        console.log(allMensProducts, 'all mens products');
      } catch (error) {
        console.log(error);
      }
    };

    fetchMensProducts();
  }, []);
  return (
    <div className='mainDiv'>
        {mensProducts.map((item)=>{
            return  <ProductInfoCard
            rating={item?.rating} 
            title={item?.title} 
            discount={item?.discountPercentage}
            image={item?.thumbnail} 
            price={item?.price} 
            products={item} 
            id={item?.id}/>
        })}
    </div>
  )
}

export default Mens