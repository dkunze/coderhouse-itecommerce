import React, { useEffect, useState } from 'react';
import { getFetch } from '../../utils/Mock';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props) {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
      .then(res => {
        setProduct(res)
        setLoading(false)
      })
  }, [])

  return <>
    {
      loading ? <h2>Loading..</h2> : <ItemList product={product} />
    }
  </>
}

export default ItemListContainer;
