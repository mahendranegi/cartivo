import React, { useContext, useState } from 'react'
import CustomInput from './CustomInput'
import Cart from './Cart'
import {  Drawer} from 'antd';

import { MenuUnfoldOutlined } from '@ant-design/icons';
import SignUp from './SignUp';
import { usersContext } from '../context/ProvideContext';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../images/logo.png'
function Header() {
    const [open, setOpen] = useState(false);
 const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
         <span onClick={showDrawer}> Open</span>
       
        <div className='logoContain'>
          <img onClick={()=>navigate('/')} src={LogoImg} alt={LogoImg} className="logoImg"/> 
           <CustomInput  pName={val} handleOnchange={(e)=>handleOnchange(e)} placeholder="Search by name of products"/>
        </div>
              
        <div className='rightPannel'>

          <div className='rightNotify'>
            <ul>
              <li onClick={()=>navigate("/")}>Home</li>
              <li onClick={()=>navigate("/mens")}>Mens</li>
              <li onClick={()=>navigate("/womens")}>Womens</li>
              <li onClick={()=>navigate("/kids")}>Kids</li>
            </ul>
          <SignUp />
          <em></em>
          <Cart handleViewCart={()=>handleOk()} />
          </div>
        </div>
        <Drawer
        title="Basic Drawer"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </header>
  )
}

export default Header