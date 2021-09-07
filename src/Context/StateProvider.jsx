import React, { createContext, useReducer, useContext } from 'react'

const Context = createContext()
function Stateprovider({ state, reducer, children }) {
    return (
        <div>
            <Context.Provider value={useReducer(reducer, state)}>
                {children}
            </Context.Provider>
        </div>
    )
}
const useStateValue = () => useContext(Context)

export default Stateprovider;
export { useStateValue };
