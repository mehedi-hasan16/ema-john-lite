import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.JSON'
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {

    const [data,setData]= useState([]);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        fetch(fakeData)
        .then(res=>res.json())
        .then(data=>{
          const getData = data.slice(0,10);
          setData(getData);
        })
    })

    const handleAddProduct = (products) => {
        const cartCount =[...cart,products]
        setCart(cartCount);

    }

    return (
        <div className='shop-container'>
            
            <div className='product-container'>
                {
                    data.map(element=><Products addProductBtn={handleAddProduct} products={element}></Products>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;