import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

import { Input } from 'antd';

function CustomInput() {
  return (
    <><Input size="large" placeholder="large size" prefix={<SearchOutlined />} /></>
        

  )
}

export default CustomInput