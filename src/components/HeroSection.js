import React from 'react'
import { Carousel } from 'antd';
import WatchImg from '../images/watch.png';
function HeroSection() {

  return (
    <div className='heroSec'>
        <Carousel arrows infinite={false}>
      <div>
        
        <div className='content'>1 <img src={WatchImg} alt={WatchImg}/></div>
      </div>
      <div>
        <div className='content'>2 <img src={WatchImg} alt={WatchImg}/></div>
      </div>
      <div>
        <div className='content'>3 <img src={WatchImg} alt={WatchImg}/></div>
      </div>
      <div>
        <div>4 <img src={WatchImg} alt={WatchImg}/></div>
      </div>
    </Carousel>
    </div>
  )
}

export default HeroSection