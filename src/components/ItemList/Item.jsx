const Item = props => {
    return (
        <div key={props.p.id} className="card w-50 mt-5">
            <div className="card-header">
                {props.p.name}
            </div>
            <div className="card-body">
                <img src={props.p.photo} alt={props.p.name} />
            </div>
            <div className="card-footer">
                {props.p.description}
            </div>
            <div className="card-footer">
                <button className="btn btn-success btn-block">${props.p.price}</button> &nbsp;<button className="btn btn-outline-primary btn-block">+ Info</button>
            </div>
        </div>
    )
}

export default Item