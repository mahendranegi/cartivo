import React, { useContext, useEffect, useState } from 'react'
import { usersContext } from '../context/ProvideContext'
import ProductInfoCard from '../components/ProductInfoCard'
import axios from 'axios';
import { Radio } from 'antd';
function Mens() {
    const [mensProducts, setMensProducts] = useState([]);
     const [filteredProducts, setFilteredProducts] = useState([]);
const [value, setValue] = useState(0);
  const onChange = (e) => {
  const selectedValue = e.target.value;

  let filtered = [];

  if (selectedValue === '0-5') {
    filtered = mensProducts.filter(
      item => item.discountPercentage >= 0 &&
              item.discountPercentage <= 5
    );
  }

  if (selectedValue === '5-10') {
    filtered = mensProducts.filter(
      item => item.discountPercentage > 5 &&
              item.discountPercentage <= 10
    );
  }

  if (selectedValue === '10-15') {
    filtered = mensProducts.filter(
      item => item.discountPercentage > 10 &&
              item.discountPercentage <= 15
    );
  }

  if (selectedValue === '15+') {
    filtered = mensProducts.filter(
      item => item.discountPercentage > 15
    );
  }

  setFilteredProducts(filtered);
};
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
// Initially show all products
        setFilteredProducts(allMensProducts);
        console.log(allMensProducts, 'all mens products');
      } catch (error) {
        console.log(error);
      }
    };

    fetchMensProducts();
  }, []);
  return (
    <div className='mainDiv'>
      <div>
         <h4>Discount Range</h4>
              <Radio.Group onChange={onChange}>
              <Radio value="0-5">0% - 5%</Radio>
              <Radio value="5-10">5% - 10%</Radio>
              <Radio value="10-15">10% - 15%</Radio>
              <Radio value="15+">15% & Above</Radio>
            </Radio.Group>
      </div>
      <div className='productCards'>
        {filteredProducts.map((item)=>{
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
    </div>
  )
}

export default Mens