import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

import { Input } from 'antd';

function CustomInput({placeholder,handleOnchange,pName}) {
  return (
    <><Input size="large" value={pName} onChange={()=>handleOnchange()} placeholder={placeholder} prefix={<SearchOutlined />} /></>
        

  )
}

export default CustomInput