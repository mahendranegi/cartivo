import React, { useContext } from 'react'
import ProductInfoCard from '../components/ProductInfoCard'
import FilterTabs from '../components/FilterTabs';
import BgImg from '../images/background.png'
import HeroSection from '../components/HeroSection';
import HeadingInfo from '../components/HeadingInfo';
import { usersContext } from '../context/ProvideContext';
function Home() {
  const {productData} = useContext(usersContext);
  return (
    <div>
      {/* <FilterTabs /> */}
      {/* <HeroSection /> */}
      {/* <img src={BgImg} style={{width:'100%'}} alt={BgImg}/> */}
       <HeadingInfo />
       <div style={{display:'flex',gap:'16px',flexWrap:'wrap',padding:'0 24px',justifyContent:'space-between'}}>
       {productData.map((item)=>(
        <ProductInfoCard  title={item?.title} description="" image={item?.thumbnail} price={item?.price} products={item}/>
       ))}
       </div>     
     
    </div>
  )
}

export default Home