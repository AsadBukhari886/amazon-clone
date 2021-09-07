import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Context/reducer';
import { useStateValue } from '../Context/StateProvider';
import '../CSS/Subtotal.css';



function SubTotal() {
    const [{ basket }] = useStateValue()
    return (
        <div>
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (<>
                        <small>Subtotal ({basket.length} items) :<strong>{`${value}`}</strong></small>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>)}
                    value={getBasketTotal(basket)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                />

                <button>check to proceed</button>
            </div>
        </div>
    )
}

export default SubTotal
