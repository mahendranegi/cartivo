import React, { useContext } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { usersContext } from '../context/ProvideContext';

function Cart({handleViewCart}) {
  const {value} = useContext(usersContext);
  return (
    <div className='cartSec'>
        {/* <span>Cart</span> */}
        <div className='cartNum' onClick={(e)=>handleViewCart(e)}>

        <ShoppingCartOutlined />
        <span className='num'>{value}</span>
        </div>
     
    </div>
  )
}

export default Cart