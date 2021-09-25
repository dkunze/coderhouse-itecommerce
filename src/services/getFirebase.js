import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDgSP7fDUkBrAXGi2WL6udsITUmGczYD3k",
  authDomain: "ch-it-ecommerce.firebaseapp.com",
  projectId: "ch-it-ecommerce",
  storageBucket: "ch-it-ecommerce.appspot.com",
  messagingSenderId: "387875351779",
  appId: "1:387875351779:web:eb94bee1832842472829d6",
  measurementId: "G-42H5FRPB3L"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase(){
  return app
}

// Return the app db
export function getFirestore(){
  return firebase.firestore(app)
}