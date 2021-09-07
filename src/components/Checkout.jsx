import React from 'react';
import Header from './Header';
import '../CSS/Checkout.css';
import { useStateValue } from '../Context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';


function Checkout() {
    const [{ basket }] = useStateValue();
    return (<>
       <Header />
        {/* <div className="container">
            
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
            </div>

        </div> */}
        <div className="checkout">
        
            <div className="checkout__left">
                <img className="checkout_ad" src="https://image.shutterstock.com/image-vector/vector-group-people-using-mobile-600w-1677300418.jpg " alt="ads" />

                {basket?.length == 0 ?
                    <>
                        <h2>Your basket is empty</h2>
                        <p>You have no item in basket.To buy one or more things click on "ADD TO BASKET" next to the item</p>
                    </>
                    :
                    <div className="product__title">
                        <div><h1>Your Basket</h1></div>

                        {basket.map((val) => {
                            return <CheckoutProduct
                                id={val.id}
                                title={val.title}
                                rating={val.rating}
                                image={val.image}
                                pricing={val.pricing}
                            />
                        })}
                    </div>


                }
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}

        </div>
    </>)
}

export default Checkout



/**/