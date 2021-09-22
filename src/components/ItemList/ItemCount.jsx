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
            <div className="col-2">
                <button onClick={minus} className="btn btn-sm btn-danger">-</button>
            </div>
            <div className="col-8">
                <input type="text" className="form-control text-center" value={count} />
            </div>
            <div className="col-2">
                <button onClick={sum} className="btn btn-sm btn-success">+</button>
            </div>
            <div className="col-12 mt-1">
                <button className="btn btn-warning btn-block" onClick={onAdd}>Add Cart</button>
            </div>
        </div>
    )
}
export default ItemCount