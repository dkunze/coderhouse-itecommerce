import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartList, removeItem, cartListTotal, setCartListTotal, clearCart } =
    useCartContext();
  const calculateTotal =
    cartList.length > 0
      ? cartList
        .map((element) => element.item.price * element.quantity)
        .reduce((a, b) => parseFloat(a, 10) + parseFloat(b, 10))
      : 0;
  const calculateQuantity =
    cartList.length > 0
      ? cartList
        .map((element) => element.quantity)
        .reduce((a, b) => parseFloat(a, 10) + parseFloat(b, 10))
      : 0;
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(!reload);
  }, [cartList]);

  const deleteItem = (element) => {
    cartList.map((item, index) => {
      if (item.item.id === element.item.id) {
        if (cartList[index].quantity === 1) {
          removeItem(element.item.id);
        } else {
          cartList[index].quantity = cartList[index].quantity - 1;
          setReload(!reload);
        }
      }
    });
    setCartListTotal(cartListTotal - 1);
    setReload(!reload);
  };

  return (
    <div>
      {cartList.length > 0 && (
        <div className=" d-flex justify-content-center card">
          <h2>Checkout</h2>
          <div key="checkoutHeader" className="row">
            <div className="col-1"></div>
            <div className="col-2">
              <b>Qty.</b>
            </div>
            <div className="col-7">
              <b>Description</b>
            </div>
            <div className="col-2">
              <b>Price</b>
            </div>
          </div>
        </div>
      )}
      {cartList.length > 0 ? (
        cartList.map((element) => {
          return (
            <div
              key={element.item.id}
              className=" d-flex justify-content-center card"
            >
              <div className="row">
                <div className="col-1">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      deleteItem(element);
                    }}
                  >
                    x
                  </button>
                </div>
                <div className="col-2">{element.quantity}</div>
                <div className="col-7">{element.item.name}</div>
                <div className="col-2">$ {element.item.price}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h2>You don't have any items in your cart.</h2>
          <Link to={`/`}>
            <button className="btn btn-outline-primary btn-block">
              Start Shopping
            </button>
          </Link>
        </div>
      )}
      {cartList.length > 0 && (
        <div className=" d-flex justify-content-center card">
          <div key="checkoutHeader" className="row">
            <div className="col-1"></div>
            <div className="col-2">
              <b>{calculateQuantity}</b>
            </div>
            <div className="col-7"></div>
            <div className="col-2">
              <b>Total:</b> $ {calculateTotal}
            </div>
          </div>
        </div>
      )}
      {cartList.length > 0 && (
        <div className=" d-flex justify-content-center card">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              clearCart();
            }}
          >
            Empty Cart
          </button>
        </div>
      )}
      {cartList.length > 0 && (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;
