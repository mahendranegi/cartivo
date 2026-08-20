import React, { useContext, useState } from 'react'
import CustomInput from './CustomInput'
import Cart from './Cart'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import SignUp from './SignUp';
import { usersContext } from '../context/ProvideContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const[val,setVal] = useState("")
  const navigate = useNavigate();
  const {clickId} = useContext(usersContext);
  // console.log(clickId,setClickId,'cart items')
  const handleOk = () =>{
    navigate('/cart')
    // setClickId(clickId)
    console.log(clickId,'hii');
  }
  const handleOnchange = (e) =>{
    const data = e.target.value.toLowerCase();
    setVal(data)
  }
  return (
    <header>
        <h1 onClick={()=>navigate('/')}><MenuUnfoldOutlined />CarTivo</h1>        
        <div className='rightPannel'>
          <CustomInput  pName={val} handleOnchange={(e)=>handleOnchange(e)} placeholder="Search by name of products"/>
          <div className='rightNotify'>
          <SignUp />
          <em></em>
          <Cart handleViewCart={()=>handleOk()} />
          </div>
        </div>
    </header>
  )
}

export default Header