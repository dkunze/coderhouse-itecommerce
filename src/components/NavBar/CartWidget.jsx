import React from 'react'
import { useCartContext } from '../../Context/cartContext';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  noUnderline: {
    textDecoration: 'none',
    color: '#000000'
  },
})

function CartWidget() {
  const classes = useStyles()
  const { cartListTotal } = useCartContext()

  return (
    <div className="mt-1 float-right">
      <img
        src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-eps-trolley-logo-web-icons-shop-button-182252657.jpg"
        alt="Shop Cart"
        width="30"
      />
      {cartListTotal > 0 && <small className={classes.noUnderline}>{cartListTotal} items</small>}
    </div>
  );
}

export default CartWidget;
