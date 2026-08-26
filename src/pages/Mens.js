import React, { useContext, useEffect, useState } from 'react'
import { usersContext } from '../context/ProvideContext'
import ProductInfoCard from '../components/ProductInfoCard'
import axios from 'axios';
import { Radio } from 'antd';
import InnerBanner from '../components/InnerBanner';
import BannerImg from '../images/men.webp'
import { Alert, Flex, Spin } from 'antd';


function Mens() {

  const[page,setPage] = useState(1);
  const[loading,setLoading] = useState(false);
  const LIMIT = 2;
  const SKIP = (page - 1) * LIMIT;
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
const fetchMensProducts = async () => {
      try {
        const [shirts, shoes, watches] = await Promise.all([
          axios.get(`https://dummyjson.com/products/category/mens-shirts?limit=${LIMIT}&skip=${SKIP}`),
          axios.get(`https://dummyjson.com/products/category/mens-shoes?limit=${LIMIT}&skip=${SKIP}`),
          axios.get(`https://dummyjson.com/products/category/mens-watches?limit=${LIMIT}&skip=${SKIP}`)
        ]);

        const allMensProducts = [
          ...shirts.data.products,
          ...shoes.data.products,
          ...watches.data.products
        ];

        setMensProducts((prev)=>[...prev,...allMensProducts]);
        // Initially show all products
        setFilteredProducts((prev)=>[...prev, ...allMensProducts]);
        console.log(allMensProducts, 'all mens products');
         setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
 

  const painationPage = () =>{
      const TopScroll = document.documentElement.scrollTop;
      const HeightInner = window.innerHeight;
      const ScrollHeight = document.documentElement.scrollHeight;
      
      if(HeightInner + TopScroll + 100 >= ScrollHeight){
        setPage((prev)=>prev + 1);
        setLoading(true)
        console.log(ScrollHeight,HeightInner,TopScroll)
      }
      
  }
    useEffect(()=>{
      window.addEventListener('scroll',painationPage);
     return () => {
      window.removeEventListener('scroll', painationPage);
    };
    },[loading]);

    useEffect(() => {   
        fetchMensProducts();
      }, [page]);
  return (
    <>
    <InnerBanner bannerImg={BannerImg}  />
    <div className='flexBody'>
      <div className="container">
      <div className='leftPannel'>
         <h4>Discount Range</h4>
              <Radio.Group onChange={onChange}>
              <Radio value="0-5">0% -5%</Radio>
              <Radio value="5-10">5% - 10%</Radio>
              <Radio value="10-15">10% - 15%</Radio>
              <Radio value="15+">15% & Above</Radio>
            </Radio.Group>
      </div>
      <div className='mainDiv'>
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
       {loading && <div className='loadingBg'><Spin description="Loading" size="large">
       
      </Spin> </div>}
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Mens