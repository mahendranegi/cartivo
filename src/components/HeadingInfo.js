import React, { useContext } from 'react'
import { Button } from 'antd';

function HeadingInfo({title,subHeading}) {
  return (
    <div className='headTitleSec'>
        <div>
            <h2>{title} <span>{subHeading}</span></h2>
        </div>
        <Button type="link">Link Button</Button>
    </div>
  )
}

export default HeadingInfo