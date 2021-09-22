import { Link } from 'react-router-dom'

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
                {props.p.category} - {props.p.description}
            </div>
            <div className="card-footer">
                <button className="btn btn-success btn-block">${props.p.price}</button> &nbsp;
                <Link to={`/details/${props.p.id}`}><button className="btn btn-outline-primary btn-block">+ Info</button></Link>
            </div>
        </div>
    )
}

export default Item