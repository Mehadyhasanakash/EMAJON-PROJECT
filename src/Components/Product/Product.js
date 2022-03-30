import React from 'react';
import './product.css'

const Product = (props) => {
    const {id, name, seller, img, category, shipping, stock,ratingsCount,price,ratings} = props.Product;
    const{hendalerToCard} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-data'>
            <h3 className='product-name'>{name}</h3>
            <p>seller: {seller}</p>
            <p>price: $ {price}</p>
            <p>shipping: $ {shipping}</p>
            <p>rating: {ratings} stars</p>
            
            </div>

            <button onClick={()=>hendalerToCard(props.Product)} className='btn-card'>
                Add to Card</button>
        </div>
    );
};

export default Product;