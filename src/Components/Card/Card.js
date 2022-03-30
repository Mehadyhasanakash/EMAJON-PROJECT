import React from 'react';
import './Card.css'

const Card = (props) => {
    const{card} =props

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of card){
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const gandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='card-Container'>
            <h2>Oder Summary</h2>
            <h5>Select item: {card.length}</h5>
            <h5>Total Price: $ {totalPrice} </h5>
            <h5>Total Shipping:$ {totalShipping} </h5>
            <h5>Tax: $ {tax}</h5>
            <h4>Grand Total: $ {gandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Card;