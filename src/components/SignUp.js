import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className='signUp' onClick={()=>navigate('/login')}><UserOutlined />SignUp/SignIn</div>
  )
}

export default SignUp