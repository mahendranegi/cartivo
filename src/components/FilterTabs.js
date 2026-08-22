import React, { useContext, useState } from 'react'
import { usersContext } from '../context/ProvideContext'

function FilterTabs({filterCat,handleOnclick}) {
  console.log(filterCat,'category item...')
  const {productData} = useContext(usersContext);

  

  return (
    <>
    
    <ul className='filterSec'>
      <h3 style={{margin: '0'}}>Category</h3>
      {filterCat.map((item)=>{
        return <li className={item.category === item ? 'active' : ''} onClick={()=>handleOnclick(item)} key={item}>{item}</li>
      })}
    </ul>
    </>
  )
}

export default FilterTabs