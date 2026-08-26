import React, { useContext, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined,FireFilled,StarFilled } from '@ant-design/icons';
import { Avatar, Card,Button } from 'antd';
import { usersContext } from '../context/ProvideContext';
import { Spin } from 'antd';

const { Meta } = Card;

const ProductInfoCard = ({title,description,image,price,products,id,discount,setNotify,notify,rating,handleImg}) => {
  const[loading ,setLoading] = useState(true)
  const {addToCart,value,productData} = useContext(usersContext);
  const final = price - (price * discount / 100);
  
  return(
 <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <div>
        {loading && <div className='spinHeight'><Spin className='spinProducts' /></div>}
      <img
        draggable={false}
        alt="example"
        loading='lazy'
        src={image}
        onLoad={()=>setLoading(false)}
        onClick={()=>handleImg(id)}
      /></div>}
  >
    <span className='pos'>{discount}% <br/>OFF</span>
    <Meta title={title} description={description}  />
    <div >
    <p>₹{final.toFixed(2)} <strike>₹{price}</strike> </p>
   
    <div className='ratingSec'>
      <span className='startBtn'><StarFilled />{rating}</span>
      <> {rating > 4 ? <span className='trending'><FireFilled />Trending</span> : ''}</>
    </div>
     </div>     
        {/* <Button onClick={()=>removeToCart(productData)} type="secondary">Remove</Button> */}
        <div className='cardFooter'>
          <span>Save - ₹{(price -final).toFixed(2)}</span>
        <Button onClick={()=> addToCart(id,products,setNotify)} type="primary">AddToCart</Button>

        
        </div>
  </Card>
  )
}

  
  
;
export default ProductInfoCard;