import { useEffect, useState } from 'react';
import ItemDetail from '../ItemList/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';

function ItemDetailContainer() {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [nonExists, setNonExists] = useState(false)
  const { productId } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore()

    if (productId) {
      dbQuery.collection('items').doc(productId).get()
        .then(res => {
          res.exists ? setProduct({ id: res.id, ...res.data() }) : setNonExists(true)
          setLoading(false)
        })
        .catch(error => console.log(error))
    }
  }, [productId])

  return (loading ? <h2>Loading...</h2> : <ItemDetail product={product} nonExists={nonExists} />)
}

export default ItemDetailContainer;