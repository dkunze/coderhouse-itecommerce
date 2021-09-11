import { useEffect, useState } from 'react';
import { getFetch } from '../../utils/Mock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({gretting}) {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();
  
  useEffect(() => {
    if (categoryId) {
      getFetch
        .then(res => {
          setProduct(res.filter(prod => prod.category === categoryId))
          setLoading(false)
        })
        .catch(error => console.log(error))
    } else {
      getFetch
        .then(res => {
          setProduct(res)
          setLoading(false)
        })
        .catch(error => console.log(error))
    }

  }, [categoryId])

  return <>
    {
      loading ? <h2>Loading...</h2> : <ItemList product={product} />
    }
  </>
}

export default ItemListContainer;
