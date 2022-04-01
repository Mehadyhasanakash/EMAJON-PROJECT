import React, { useState } from 'react';
import useProduct from '../../Hook/useState/useState';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products] = useProduct()
    const [card, setCard] = useState([])
    


    const hendalerToCard = (product) => {
        const newCard = [...card, product]
        setCard(newCard);
    }
    return (
        <div className='shope-container'>
            <div className="shoes-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        Product={product}
                        hendalerToCard={hendalerToCard}

                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;