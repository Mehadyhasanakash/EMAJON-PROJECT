import React from 'react';
import './product.css'

const Product = (props) => {
    const {id, name, seller, img, category, shipping, stock,ratingsCount} = props.Product;
    return (
        <div className='Product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;