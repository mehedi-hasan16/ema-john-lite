import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    const total = cart.reduce((total,element)=>total+element.price,0);

    let shipping =0;

    if(total > 35){
        shipping = 0;
    }else if (total > 15){
        shipping = 4.99;

    }else if (total > 0){
        shipping = 12.99;
    }

    const tax = (total /10).toFixed(2);
    const grandTotal= (total+shipping+Number(tax)).toFixed(2);


    return (
        <div>
            <h4>Ordered Summary</h4>
            <p>Item Ordered: {cart.length}</p>
            <p>Total Price: {total.toFixed(2)}</p>
            <p>Shipping Cost: {shipping.toFixed(2)}</p>
            <p>vat and tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;