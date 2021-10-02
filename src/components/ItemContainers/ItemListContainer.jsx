import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';

function ItemListContainer({ gretting }) {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore()
    const dbWhere = categoryId ? dbQuery.collection('items').where('category', '==', categoryId) : dbQuery.collection('items')

    // Retrieve products
    dbWhere.get()
      .then(res => {
        setProduct(res.docs.map(item => ({ id: item.id, ...item.data() })))
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [categoryId])

  return (loading ? <h2>Loading...</h2> : <ItemList product={product} />)
}

export default ItemListContainer;
