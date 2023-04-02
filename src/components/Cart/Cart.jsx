import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const cart = props.cart
    // const { cart } = props

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        if (product.quantity === 0) {
            product.quantity = 1;
        }

        // product.quantity == product.quantity || 1;  uporer condition ta ke nicher vabeo lekha jay.....

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='order-summary'>
            <h1>Order Summary</h1>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h4>Grand Total: ${grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;