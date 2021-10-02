import { useEffect, useState } from 'react';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';
import CartContactForm from '../Cart/CartContactForm'
import cartUpdateItemsStock from '../../services/cartUpdateItemsStock';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import firebase from "firebase";
import 'firebase/firestore'

const Cart = () => {
  const { cartList, removeItem, cartListTotal, setCartListTotal, clearCart, setCartList } = useCartContext();
  const calculateTotal = cartList.length > 0 ? cartList.map((element) => element.item.price * element.quantity).reduce((a, b) => parseFloat(a, 10) + parseFloat(b, 10)) : 0;
  const calculateQuantity = cartList.length > 0 ? cartList.map((element) => element.quantity).reduce((a, b) => parseFloat(a, 10) + parseFloat(b, 10)) : 0;
  const [reload, setReload] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const [loading, setLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const handleDisabledBtn = () => {
    return !formData.name?.length || !formData.phone?.length || !formData.email?.length  
  }

  // Contact form sending the data from your cart.
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    let order = {}
    order.date = firebase.firestore.Timestamp.fromDate(new Date())
    order.buyer = formData
    order.total = calculateTotal
    order.items = cartList.map(cartItem => {
      const id = cartItem.item.id;
      const name = cartItem.item.name;
      const price = cartItem.item.price;
      return { id, name, price }
    })

    const dbQuery = getFirestore();
    dbQuery
      .collection('orders')
      .add(order)
      .then((res) => {        
        setOrderNumber(res.id)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        // Clear form data
        setFormData({
          name: '',
          phone: '',
          email: ''
        })
        // Clear cart list
        setCartList([])
        // Clear cart total
        setCartListTotal(0)
        // Update stock to all items
        cartUpdateItemsStock(cartList, dbQuery)
        // Set loading to false 
        setLoading(false)
        // Show the modal 
        setModalShow(true)
      })
  }

  // Set the data into the formData
  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  useEffect(() => {
    //setReload(!reload);
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
        setCartListTotal(cartListTotal - 1);
        setReload(!reload);
      }
      return true
    });
  };

  return (
    <div>
      {loading && (
        <div>Please, wait...</div>
      )}

      {!loading && cartList.length > 0 &&
        <>
          <div className=" d-flex justify-content-center card mt-5">
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
          {cartList.map((element) => {
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
            )
          })}
          {/* Summary Cart here */}
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
          {/* Btn Empty Cart here */}
          <div>
            <div className=" d-flex justify-content-center card">
              <button className="btn btn-sm btn-danger" onClick={() => { clearCart() }}>Empty Cart</button>
            </div>
            {/* Contact form here */}
            <CartContactForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} formData={formData} handleDisabledBtn={handleDisabledBtn} />
          </div>
        </>
      }

      { /* No items found */}
      {!loading && cartList.length === 0 && (
        <div>
          <h2>You don't have any items in your cart.</h2>
          <Link to={`/`}>
            <button className="btn btn-outline-primary btn-block">
              Start Shopping
            </button>
          </Link>
        </div>
      )}

      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your purchase! You will get notified soon. Use this Order Number <b>#{orderNumber}</b> for make the follow up!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Cart;
