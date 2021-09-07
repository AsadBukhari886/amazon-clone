import React, { useContext } from 'react';
import "../CSS/Product.css";
import { useStateValue } from '../Context/StateProvider';


function Products({ id, title, rating, image, pricing }) {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id, title, rating, image, pricing
            }
        })

    }

    return (
        <div className="product">
            <div className="product__info">
                <small>{title}</small>
                <p className="product__price">
                    <small>$</small>
                    <strong>{pricing}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>

            </div>

            <img src={image} alt="product__image" />
            <button onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Products
