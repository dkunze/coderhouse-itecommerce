import React from 'react'
import { useState, createContext, useContext } from "react";

const cartContext = createContext()
export const useCartContext = () => {
    return useContext(cartContext)
}

export const CartContext = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [isInCart, setIsInCart] = useState(false)

    function addItem(item, quantity) {
        let searchItem = cartList.find(product => product.item.id === item.id)
        if (!searchItem) {
            setCartList([...cartList, { item, quantity }])
        } else {
            // If the product already exists in our cart, we have to update the quantity
            cartList.map((product, index) => {
                if (product.item.id === item.id) {
                    cartList[index].quantity = cartList[index].quantity + quantity
                }
            })
        }
    }

    function removeItem(item) {

    }

    function clear() {

    }

    return (
        <cartContext.Provider value={{
            cartList,
            addItem
        }} >
            {children}
        </cartContext.Provider>
    )
}

export default CartContext