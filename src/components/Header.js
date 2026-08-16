import React from 'react'
import CustomInput from './CustomInput'
import Cart from './Cart'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import SignUp from './SignUp';

function Header() {
  return (
    <header>
        <h1><MenuUnfoldOutlined />Logo</h1>
        
        <div className='rightPannel'>
          <CustomInput />
          <div className='rightNotify'>
          <SignUp />
          <em></em>
          <Cart />
          </div>
        </div>
    </header>
  )
}

export default Header