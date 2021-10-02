import Item from '../ItemList/Item'

const ItemList = props => {
    return (props.product.length > 0) ? <div className="row">{props.product.map(p => <Item p={p} key={p.id} />)} </div> : <div><h2>Ups, sorry. We don't have products with your criteria.</h2></div>
}

export default ItemList