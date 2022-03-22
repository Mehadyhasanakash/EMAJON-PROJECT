import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shoes.css';

const Shoes = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    const hendalerToCard =(product)=>{
        const newCard =[...cart, product]
        setCart (newCard);
    }
    return (
        <div className='shope-container'>
            <div className="shoes-container">
                 {
                     products.map(product => <Product
                        key ={product.id}
                         Product={product}
                         hendalerToCard={hendalerToCard}
                     
                     ></Product> )
                 }
            </div>
            <div className="shoes-data-container">
            <h2>Oder Summary</h2>
            <h4>Select item: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shoes;