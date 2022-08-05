import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)

    const addToCart = (data) => {
        setCart([...cart, data])
        setCount(count + 1)
    }
    const delToCart = () => {
        setCount(0)
        setCart([])
    }

    return <Context.Provider value={
        {
            cart,
            count,
            addToCart,
            delToCart
        }
    }>
        {children}
    </Context.Provider>
}