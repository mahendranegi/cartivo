import React, { useContext, useState } from 'react'
import ViewCartCard from '../components/viewCartCard'
import PriceTotal from '../components/PriceTotal'
import { usersContext } from '../context/ProvideContext'
import NoPageFound from './NoPageFound'
import HeadingInfo from '../components/HeadingInfo'

function ViewCart() {
    const { clickId, addToCart, setClickId, value, setValue } = useContext(usersContext);
    console.log(clickId, 'clickId_________-')
    const handleremoveItems = (id) => {
        // alert(id)
        const removeItem = clickId.filter((item, index) => {
            return index !== id;

        });
        if (value > 0) {
            setValue(value - 1);
        }

        setClickId(removeItem);
    }
    const handleMinus = (id) => {
                 setClickId((prev) =>
            
            prev.map((item) =>
                item.id === id ? {
                    ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                } : item
            )
        );
       
       

    }

    const handlePlus = (id) => {
        setClickId((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };



    const totalItems = clickId.reduce((total, item) => {
  return total + item.quantity;
}, 0);

const subTotal = clickId.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

const discount = clickId.reduce((total, item) => {
  const itemDiscount =
    (item.price * item.discountPercentage * item.quantity) / 100;

  return total + itemDiscount;
}, 0);


const final = subTotal - discount.toFixed(2);
    return (
        <> 
        <HeadingInfo title="View Cart" subHeading="all"/>
        <div className='viewCartPargeSec'>
           
            {
                clickId.length > 0 ? <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                        {clickId.map((item, id) => (
                            <ViewCartCard  description={item.description} value={item?.quantity} handleremoveItems={() => handleremoveItems(id)} handleRemove={() => handleMinus(item.id)} handleAdd={() => handlePlus(item.id)} image={item?.images} title={item?.title} description={item?.description} price={item?.price} />
                        ))}
                    </div>
                    <PriceTotal final={final.toFixed(2)} discount={discount.toFixed(2)} totalItems={totalItems.toFixed(2)} subTotal={subTotal} />
                </div> : <NoPageFound />

            }


        </div>
        </>
    )
}

export default ViewCart