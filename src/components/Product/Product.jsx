import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    const handleCart = props.handleCart

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-title'>{name}</h6>
                <span>Price: ${price}</span><br />
                <span>Manufacturer: {seller}</span><br />
                <span>Rating: {ratings} stars</span><br />
            </div>
            <button onClick={() => handleCart(props.product)} className='btn-cart'>Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;