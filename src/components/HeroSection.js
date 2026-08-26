import React from 'react'
import { Carousel } from 'antd';
import WatchImg from '../images/watch.png';
import One from '../images/one.webp'
import Two from '../images/two.webp'
import Three from '../images/three.webp'
function HeroSection() {

  return (
    <div className='heroSec'>
        <Carousel arrows effect="fade" autoplay infinite={true} dots={false}>
      <div>
        <img />
        <div className='content'><img src={One} alt={WatchImg}/></div>
      </div>
      <div>
        <div className='content'><img src={Two} alt={WatchImg}/></div>
      </div>
      <div>
        <div className='content'><img src={Three} alt={WatchImg}/></div>
      </div>
    </Carousel>
    </div>
  )
}

export default HeroSection