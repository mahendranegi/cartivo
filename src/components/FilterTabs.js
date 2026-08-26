import React, { useContext, useState } from 'react'
import { usersContext } from '../context/ProvideContext'
import { Radio } from 'antd';
import { useNavigate } from 'react-router-dom';

function FilterTabs({filterCat,handleOnclick}) {
  const navigate = useNavigate()
  const { productData, setProductData } = useContext(usersContext);
  const [value, setValue] = useState(1);
  const onChange = e => {
    
    console.log(e.target.value)
    setValue(e.target.value);
  };
  const onChangeDiscount = (e) =>{
    const selectedValue = e.target.value;
    let sortedDiscount = [...productData]
    if(selectedValue === "3-5" ){
      sortedDiscount = sortedDiscount.filter((item)=>item.discountPercentage >= 3 && item.discountPercentage <= 5);
      console.log(sortedDiscount,'sortedDiscount')
    }
       if(selectedValue === "6-10" ){
      sortedDiscount = sortedDiscount.filter((item)=>item.discountPercentage >= 6 && item.discountPercentage <= 10);
      console.log(sortedDiscount,'sortedDiscount')
    }
    
    if(selectedValue === "11-15" ){
            sortedDiscount = sortedDiscount.filter((item)=>item.discountPercentage >= 11 && item.discountPercentage <= 15);

    }
     if(selectedValue === "16-20"){
            sortedDiscount = sortedDiscount.filter((item)=>item.discountPercentage >= 16 && item.discountPercentage <= 20);
    }
     if(selectedValue === "20"){
            sortedDiscount = sortedDiscount.filter((item)=>item.discountPercentage > 20);
    }


    setProductData(sortedDiscount)
  }
  

  return (

    <>
    
    <ul className='filterSec'>
      {/* <h3 style={{margin: '0'}}>Category</h3> */}
      {/* {filterCat.map((item)=>{
        return <li className={item.category === item ? 'active' : ''} onClick={()=>handleOnclick(item)} key={item}>{item}</li>
      })} */}
     
     <h3>Discount Range</h3>
     <h4 onClick={()=>window.location.reload()}>Reset</h4>
     <Radio.Group onChange={onChangeDiscount}>
    <Radio value="3-5">3% to 5%</Radio>
    <Radio value="6-10">6% to 10%</Radio>
    <Radio value="11-15">11% to 15% </Radio>
    <Radio value="16-20">16% to 20%</Radio>
    <Radio value="20">20% to above</Radio>
  </Radio.Group>

   <h3>Brands</h3>
     <Radio.Group onChange={onChange}>
    <Radio value={1}>Essence"</Radio>
    <Radio value={2}>Nail Couture</Radio>
    <Radio value={3}>Dolce & Gabbana</Radio>
    <Radio value={4}>Bath Trends</Radio>
    <Radio value={4}>groceries</Radio>
  </Radio.Group>
    </ul>
    
    </>
  )
}

export default FilterTabs