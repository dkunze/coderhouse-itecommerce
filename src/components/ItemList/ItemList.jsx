import Item from '../ItemList/Item'

const ItemList = props => {    
    return (
        <div className="row">
            {props.product.map(p =>
                <Item p={p} key={p.id} />
            )}
        </div>
    );
}

export default ItemList