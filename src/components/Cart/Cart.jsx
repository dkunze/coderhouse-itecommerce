import React from 'react'
import { useCartContext } from '../../Context/cartContext';

const Cart = () => {
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