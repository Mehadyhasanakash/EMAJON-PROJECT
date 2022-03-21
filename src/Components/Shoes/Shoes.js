import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shoes.css';

const Shoes = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shope-container'>
            <div className="shoes-container">
                 {
                     products.map(product => <Product
                        key ={product.id}
                         Product={product}
                     
                     ></Product> )
                 }
            </div>
            <div className="shoes-data-container">
            <h2>Shoes data</h2>
            </div>
        </div>
    );
};

export default Shoes;