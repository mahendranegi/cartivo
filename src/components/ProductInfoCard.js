import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card,Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart, removeItem } from '../redux/slice';
const { Meta } = Card;

const ProductInfoCard = ({title,description,image,price,removeItem,addToCart}) => {
  const dispatch = useDispatch();
  return(
 <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src={image}
      />
    }
  >
    <Meta title={title} description={description}  />
    <span>{price}</span>
    <div style={{display:'flex',gap:'12px'}}>       
        <Button onClick={()=>dispatch(removeItem())} type="secondary">Remove</Button>
        <Button onClick={()=> dispatch(addToCart())} type="primary">AddToCart</Button>
    </div>
  </Card>
  )
}

  
  
;
export default ProductInfoCard;