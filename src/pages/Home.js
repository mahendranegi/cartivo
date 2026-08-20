import React, { Suspense, useContext, useEffect, useState } from 'react'
// import ProductInfoCard from '../components/ProductInfoCard'
import FilterTabs from '../components/FilterTabs';
import BgImg from '../images/background.png'
import HeroSection from '../components/HeroSection';
import HeadingInfo from '../components/HeadingInfo';
import { usersContext } from '../context/ProvideContext';
import Notify from '../components/Notify';

const ProductInfoCard = React.lazy(()=>import("../components/ProductInfoCard"));
function Home() {
    const[filterProducts,setFilterProducts] = useState([]);
const [notify, setNotify] = useState(false);
  const {productData,setProductData} = useContext(usersContext);
  const [filterCat,setFilterCat] = useState([])
  useEffect(() => {
  if (productData.length > 0) {
    const categories = [...new Set(productData.map(item => item.category))];
    setFilterCat(categories);

    // Show all products initially
    setFilterProducts(productData);
  }
}, [productData]);
  // filter logic
  const handleOnclick = (category) =>{
    let filterData = productData.filter((item)=>{
      return item.category === category;
    })
    // console.log(filterData,'filterData')
    setFilterProducts(filterData)
    // setProductData(filterData)
  }
  return (
    <div>
      
      <HeroSection  />
<Notify
  notify={notify}
  title="Product added to cart!"
/>      
      {/* <img src={BgImg} style={{width:'100%'}} alt={BgImg}/> */}
       <HeadingInfo  title="Featured Products" subHeading="all" />
       <div className='flexBody'>
       <FilterTabs handleOnclick={handleOnclick}  filterCat={filterCat}/>
       <div className='mainDiv' style={{display:'flex',gap:'24px',flexWrap:'wrap',justifyContent:'space-evenly'}}>
         <Suspense fallback="Loading">
       {filterProducts.map((item)=>(       
        <ProductInfoCard rating={item?.rating} notify={notify} setNotify={setNotify}  title={item?.title} discount={item?.discountPercentage} description="" image={item?.thumbnail} price={item?.price} products={item} id={item?.id}/>
       
       ))}
        </Suspense>
       </div>
       </div>     
     
    </div>
  )
}

export default Home