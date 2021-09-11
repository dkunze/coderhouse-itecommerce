import { useEffect, useState } from 'react';
import { getFetch } from '../../utils/Mock';
import ItemDetail from '../ItemList/ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      getFetch
        .then(res => {
          setProduct(res.find(prod => prod.id === productId))
          setLoading(false)
        })
        .catch(error => console.log(error))
    }
  }, [productId])
  
  return <>
    {
      loading ? <h2>Loading...</h2> : <ItemDetail product={product} />
    }
  </>
}

export default ItemDetailContainer;