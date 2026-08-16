import { createContext, useEffect, useState } from "react";

export const usersContext = createContext("");


function ProvideContext({children}) {
    const[productData,setProductData]= useState([]);
    const[clickId,setClickId] = useState([])
    const[value,setValue] = useState(0);
    const[currentStatus,setCurrentStatus] = useState(1);
    useEffect(() => {
        console.log(clickId, "CART ITEMS");
        }, [clickId]);
      useEffect(()=>{
        fetch("https://dummyjson.com/products").then((response)=>{
          return response.json()
        }).then((data)=>{
          console.log(data.products,'data_____ by context api ');
          setProductData(data.products)
        }).catch((error)=>{
          console.log(error,'___error')
        })
      },[]);
      
    //Add to Cart

    const addToCart = (id) =>{
        setValue(value+1);
        setClickId([...clickId,id]);        
    }

    //Remove Cart
     const removeToCart = (id) =>{
        const newItems = [...clickId];
        newItems.splice(id,1);
        console.log(newItems,'new items')
        if(value > 0){
            setValue(value-1);
            return;
        }
        
        
    }
  return (
    <usersContext.Provider value={{productData,setProductData,addToCart,value,removeToCart}}>
        {children}
    </usersContext.Provider>
  )
}

export default ProvideContext