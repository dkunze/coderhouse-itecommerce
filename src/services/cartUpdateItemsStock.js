import firebase from "firebase";
import 'firebase/firestore'

const cartUpdateItemsStock = (cartList, dbQuery) => {    
    const itemsToUpdate = dbQuery.collection('items').where(
        firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.id)
    )
    const batch = dbQuery.batch();
    itemsToUpdate.get()
        .then(collection => {
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).quantity
                })
            })
            batch.commit().then(res => {
                //console.log('Stock updated')
            })
        })
    // End update stock to all items
}

export default cartUpdateItemsStock