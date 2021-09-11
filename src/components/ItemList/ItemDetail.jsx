
const ItemDetail = props => {
    return (
        <div key={props.product.id} className="card w-50 mt-5">
            <div className="card-header">
                {props.product.name}
            </div>
            <div className="card-body">
                <img src={props.product.photo} alt={props.product.name} />
            </div>
            <div className="card-footer">
                {props.product.category} - {props.product.description}
            </div>
            <div className="card-footer">
                <button className="btn btn-success btn-block">${props.product.price}</button> &nbsp;
                
            </div>
        </div>
    )
}

export default ItemDetail