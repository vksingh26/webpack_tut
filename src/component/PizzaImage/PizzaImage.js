import React from 'react';

import './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = (props) => {
    return (
        <div className="PizzaImage">
            <img src={PizzaImage} className="PizzaImg" />
        </div>
    )
}

export default pizzaImage;