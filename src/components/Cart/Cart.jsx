import React from 'react'
import { useCartContext } from '../../Context/cartContext';

console.log('Hello')
const Cart = () => {
    console.log('Hello x2')
    
    const { cartList } = useCartContext()
    console.log(cartList)

    return (
        <div>
            {cartList.map(products => {
                return <h2>{products.name}</h2>
            })}
        </div>
    )
    
}

export default Cart