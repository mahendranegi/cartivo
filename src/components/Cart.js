import React, { useContext } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { usersContext } from '../context/ProvideContext';

function Cart() {
  const {value} = useContext(usersContext);
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