const initState = {
    basket: []
};

const getBasketTotal = (basket) => {
    console.log("bassket", basket)
    return basket?.reduce((amount, item) => item.pricing + amount, 0)
}

const reduceFun = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                // ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            console.log("::: action.id", action.id);

            let newBasket = state.basket.filter((val) => val.id !== action.id);
            console.log("newBasket::", newBasket)
            return { basket: [...newBasket] }
        default:
            return state
    }
}

export default reduceFun;
export { initState, getBasketTotal };