import React from 'react'
import { useState } from "react"
import { useCartContext } from "../../Context/cartContext"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import shippment from '../../images/shipping.jpeg';

const useStyles = makeStyles({
    marginRow: {
        margin: '8px 0 8px 0px',
    },
    marginTop: {
        marginTop: '50px',
    },
    imgShippment: {
        width: '100%'
    }
})

const ItemDetail = props => {
    const classes = useStyles()
    const { addItem } = useCartContext()
    const [changeButton, setChangeButton] = useState(false)

    const onAdd = (count) => {
        addItem(props.product, count)
        setChangeButton(true)
    }

    return (
        <div>
            <div className={classes.marginTop + " row"}>
                <h3>Product Details</h3>
            </div>

            <div className="row d-flex justify-content-center">
                <div key={props.product.id} className="col-6 card">
                    <div className="card-header">
                        {props.product.name}
                    </div>
                    <div className="card-body">
                        <img src={props.product.photo} alt={props.product.name} />
                    </div>
                    <div className="card-footer">
                        {props.product.description}
                    </div>
                    <div className="card-body">
                        Price: <button className="btn btn-default btn-block"><h3>${props.product.price}</h3></button>
                        <br />
                        <small><i>category</i>: <b>{props.product.category}</b></small>
                    </div>
                    <div className="card-body">
                        {
                            !changeButton ?
                                <div className={classes.marginRow}>
                                    Stock Available: <b>{props.product.stock}</b>
                                    <ItemCount initial={1} stock={props.product.stock} onAdd={onAdd}></ItemCount>
                                </div>
                                :
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-6">
                                            <Link to="/cart"><button className=" btn btn-success btn-block">Go to Checkout</button></Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/"><button className=" btn btn-primary btn-block">Keep Buying</button></Link>
                                        </div>
                                    </div>
                                </div>
                        }
                        <div className={classes.marginTop}>
                            <img src={shippment} alt="" className={classes.imgShippment} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail