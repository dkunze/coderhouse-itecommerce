import React from 'react'
import { useEffect, useState } from 'react';
// import { getFetch } from '../../utils/Mock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';

function ItemListContainer({ gretting }) {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore()

    if (categoryId) {
      dbQuery.collection('items').where('category', '==', categoryId).get()
        .then(res => {          
          setProduct(res.docs.map(item => ({ id: item.id, ...item.data() }))) //.filter(prod => prod.category === categoryId)
          setLoading(false)
        })
        .catch(error => console.log(error))

    } else {
      dbQuery.collection('items').get()
        .then(res => {
          setProduct(res.docs.map(item => ({ id: item.id, ...item.data() })))
          setLoading(false)
        })
        .catch(error => console.log(error))
    }
    /*    
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
    */
  }, [categoryId])

  return (loading ? <h2>Loading...</h2> : <ItemList product={product} />)
}

export default ItemListContainer;
