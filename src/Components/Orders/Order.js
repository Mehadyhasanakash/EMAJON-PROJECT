import React from 'react';
// import useCart from '../../Hook/useCard';
import useProduct from '../../Hook/useState/useState';

const Order = () => {
    const [products] = useProduct();
    // const [card] = useCart(products)
    return (
        <div>
            <h1>this is my order: {products.length}</h1>
            {/* <p>card: {card.length}</p> */}
        </div>
    );
};

export default Order;