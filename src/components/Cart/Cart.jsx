import React, { useState } from 'react'
import { useCartContext } from '../../Context/cartContext';

const Cart = () => {
    const { cartList } = useCartContext()
    const calculateTotal = cartList.length > 0 ? cartList.map(element => element.item.price * element.quantity).reduce((a, b) => parseFloat(a, 10) + parseFloat(b, 10)) : 0
    const calculateQuantity = cartList.length > 0 ? cartList.map(element => element.quantity).reduce((a, b) => parseFloat(a, 10) + parseFloat(b, 10)) : 0

    return (
        <div>
            <h2>Checkout</h2>
            <div className="row d-flex justify-content-center card">
                <div key="checkoutHeader" className="row">
                    <div className="col-2">
                        <b>Quantity</b>
                    </div>
                    <div className="col-8">
                        <b>Description</b>
                    </div>
                    <div className="col-2">
                        <b>Price</b>
                    </div>
                </div>
            </div>
            {cartList.map(element => {
                return (
                    <div className="row d-flex justify-content-center card">
                        <div key={element.item.id} className="row">
                            <div className="col-2">
                                {element.quantity}
                            </div>
                            <div className="col-8">
                                {element.item.name}
                            </div>
                            <div className="col-2">
                                $ {element.item.price}
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="row d-flex justify-content-center card">
                <div key="checkoutHeader" className="row">
                    <div className="col-2">
                        <b>{calculateQuantity}</b>
                    </div>
                    <div className="col-8">
                    </div>
                    <div className="col-2">
                        <b>Total:</b> $ {calculateTotal}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart