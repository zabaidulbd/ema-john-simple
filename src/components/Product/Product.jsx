import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-title'>{name}</h6>
                <span>Price: ${price}</span><br />
                <span>Manufacturer: {seller}</span><br />
                <span>Rating: {ratings} stars</span><br />
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;