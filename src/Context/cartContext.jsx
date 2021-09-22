import { useState, createContext, useContext } from "react";

const cartContext = createContext()
export const useCartContext = () => {
    return useContext(cartContext)
}

export const CartContext = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [isInCart, setIsInCart] = useState(false)

    function addItem(item) {
        setCartList([...cartList, item])
        console.log(cartList)
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