import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  return (
    <div className='signUp' onClick={()=>navigate('/login')}><UserOutlined />{user ? user.name : 'SignUp/SignIn'} </div>
  )
}

export default SignUp