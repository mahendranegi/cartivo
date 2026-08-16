import React, { useContext } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card,Button } from 'antd';
import { usersContext } from '../context/ProvideContext';
const { Meta } = Card;

const ProductInfoCard = ({title,description,image,price,products}) => {
  
  const {addToCart,value,removeToCart,productData} = useContext(usersContext);
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
        <Button onClick={()=>removeToCart()} type="secondary">Remove</Button>
        <Button onClick={()=> addToCart(products)} type="primary">AddToCart</Button>
    </div>
  </Card>
  )
}

  
  
;
export default ProductInfoCard;