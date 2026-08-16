import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

function Cart() {
   const value = useSelector((state)=>state.cart.value)
  return (
    <div className='cartSec'>
        {/* <span>Cart</span> */}
        <div className='cartNum'>

        <ShoppingCartOutlined />
        <span className='num'>{value}</span>
        </div>
     
    </div>
  )
}

export default Cart