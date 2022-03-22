import React from 'react';
import './product.css'

const Product = (props) => {
    const {id, name, seller, img, category, shipping, stock,ratingsCount,price} = props.Product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-data'>
            <h3>{name}</h3>
            <p>{seller}</p>
            <p>{price}</p>
            </div>
        </div>
    );
};

export default Product;