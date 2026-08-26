import React, { useContext } from 'react'
import { Select, Space } from 'antd';
import { usersContext } from '../context/ProvideContext';


function Filtered({handleChange}) {
      const { productData, setProductData } = useContext(usersContext);
    
    return (
        <div className='filteredSection'>
            <div className='container'>
                <h3>Filters <span style={{fontWeight:'300'}}> | Cartivo fashion store - <span style={{color: "#757575"}}>{productData?.length}</span></span></h3>
            <div className='shortBySection'><span>Sort by:</span>
                <Select
                    defaultValue="Recommended"
                    onChange={handleChange}
                    options={[
                        { value: 'priceHigh', label: 'Price: High to Low' },
                        { value: 'priceLow', label: 'Price: Low to High' },
                        { value: 'ratingHigh', label: 'Rating: High to Low' },
                         { value: 'ratingLow', label: 'Rating: Low to High' },
                          { value: 'trending', label: 'Trending' },
                        { value: 'new', label: 'What is new'},
                    ]}
                />
            </div>

                {/* <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                /> */}
            </div>
        </div>
    )
}

export default Filtered