import React, { Suspense, useContext, useEffect, useState } from 'react'
// import ProductInfoCard from '../components/ProductInfoCard'
import FilterTabs from '../components/FilterTabs';
import BgImg from '../images/background.png'
import HeroSection from '../components/HeroSection';
import HeadingInfo from '../components/HeadingInfo';
import { usersContext } from '../context/ProvideContext';
import Notify from '../components/Notify';
import { useNavigate } from 'react-router-dom';
import Filtered from '../components/Filtered';

const ProductInfoCard = React.lazy(() => import("../components/ProductInfoCard"));
function Home() {
  const navigate  = useNavigate();
  const [val, setVal] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [notify, setNotify] = useState(false);
  const { productData, setProductData } = useContext(usersContext);
  const [filterCat, setFilterCat] = useState([]);

  useEffect(() => {
    if (productData.length > 0) {
      const categories = [...new Set(productData.map(item => item.category))];
      setFilterCat(categories);

      // Show all products initially
      setFilterProducts(productData);
    }
  }, [productData]);
  // filter logic
  const handleOnclick = (category) => {
    let filterData = productData.filter((item) => {
      return item.category === category;
    })
    // console.log(filterData,'filterData')
    setFilterProducts(filterData)
    // setProductData(filterData)
  }
  const handleImg = (index, item) => {
    navigate (`/product-details/${index}`)
    setVal(item)
    console.log(val, '___Products detals items')
  }
  const handleChange = value => {
    let sortedProducts = [...productData];
    if(value === "priceHigh"){
      sortedProducts.sort((a,b)=>b.price - a.price)
      
    }
    if(value === "priceLow"){
     sortedProducts.sort((a,b)=>a.price - b.price)
    }
    if(value === "ratingHigh"){
      sortedProducts.sort((a,b)=>b.rating - a.rating)
    }
    if(value === "ratingLow"){
      sortedProducts.sort((a,b)=>a.rating - b.rating)
    }
    if (value === "trending") {
  sortedProducts = sortedProducts.filter(
    (item) => item.rating >= 4
  );

  console.log("trendingg", sortedProducts);
}
    if(value === "new"){
      console.log('first new price')
    }
    setFilterProducts(sortedProducts)
        // console.log(`selected ${value}`);
        // const sorting = productData.map((item)=>{
        //   return item.price;
        // })
        // console.log(sorting.sort((a,b)=>b-a),'price')
        // if(productData)
        // const sortBy = productData.filter((item)=>{
        //   return item
        // })

        // console.log(sortBy,'sortBy')
    };
  return (
    <div>

      <HeroSection />
      <Notify
        notify={notify}
        title="Product added to cart!"
      />
      <HeadingInfo title="Featured Products" subHeading="all" />
      <Filtered handleChange={handleChange}/>
      <div className='flexBody'>
        
        <div className='container'>
          <FilterTabs handleOnclick={handleOnclick} filterCat={filterCat} />
          <div className='mainDiv'>
            <div className='productCards'>
              <Suspense fallback="Loading">
              {filterProducts.map((item, id) => (
                <ProductInfoCard handleImg={() => handleImg(id + 1, item)} rating={item?.rating} notify={notify} setNotify={setNotify} title={item?.title} discount={item?.discountPercentage} description="" image={item?.thumbnail} price={item?.price} products={item} id={item?.id} />
              ))}
            </Suspense>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home