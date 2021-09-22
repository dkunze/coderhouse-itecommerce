import React from 'react'
import { useState } from "react"

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)

    function sum() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function minus() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="row">
            <div className="col-1">
                <button onClick={minus} className="btn btn btn-default">-</button>
            </div>
            <div className="col-10">
                <input type="text" className="form-control text-center" value={count} readOnly />
            </div>
            <div className="col-1">
                <button onClick={sum} className="btn btn btn-default">+</button>
            </div>
            <div className="col-12 mt-1">
                <button className="btn btn-warning btn-block" onClick={() => { onAdd(count) }}>Add Cart</button>
            </div>
        </div>
    )
}
export default ItemCount