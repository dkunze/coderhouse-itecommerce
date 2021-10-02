import { useState, createContext, useContext } from "react";

const cartContext = createContext()
export const useCartContext = () => {
    return useContext(cartContext)
}

export const CartContext = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [cartListTotal, setCartListTotal] = useState(0)

    function addItem(item, quantity) {
        setCartListTotal(0)

        let searchItem = cartList.find(product => product.item.id === item.id)
        if (!searchItem) {
            setCartList([...cartList, { item, quantity }])
            setCartListTotal(cartListTotal + quantity)
        } else {
            // If the product already exists in our cart, we have to update the quantity
            cartList.map((product, index) => {
                if (product.item.id === item.id) {
                    cartList[index].quantity = cartList[index].quantity + quantity                    
                }
                return setCartListTotal(cartListTotal + cartList.quantity)    
            })
        }
    }

    function removeItem(productId) {        
        const newArray = cartList.filter((p) => p.item.id !== productId)
        setCartList(newArray)        
    }

    function clearCart() {
        setCartList([])
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            cartListTotal,
            setCartListTotal,
            clearCart,
            setCartList
        }} >
            {children}
        </cartContext.Provider>
    )
}

export default CartContext