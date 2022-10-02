import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const{ img, name, seller, price, stock}=props.products;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>

                <h4 className='product-name'>{name}</h4> 
                <p><small>{seller}</small></p>
                <p>$:{price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.addProductBtn(props.products)} className='add-to-cart-btn'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

            </div>
        </div>
    );
};

export default Products;