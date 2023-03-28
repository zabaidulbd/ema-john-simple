import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='order-container'>
                <h2>this is from order: {products.length}</h2>
            </div>
            <div className='cart-container'>
                <h1>this is from cart</h1>
            </div>
        </div>
    );
};

export default Shop;