import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import "../CSS/CheckoutProduct.css";

function CheckoutProduct({ id, title, rating, image, pricing }) {

    const [{ basket }, dispatch] = useStateValue()

    const removeButton = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div>
            <div className="checkout__show">
                <div className="checkout__image">
                    <img className="product__image" src={image} alt="product__image" />
                </div>
                <div className="checkout_stuff">
                    <p>{title}</p>
                    ${pricing}
                    <div className="rating">
                        {Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))}
                    </div>
                    <button onClick={removeButton}>Remove from basket</button>

                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
