import React from 'react';

const Card = (props) => {
    const{card} =props
    return (
        <div>
            <h2>Oder Summary</h2>
            <h4>Select item: {card.length}</h4>
        </div>
    );
};

export default Card;