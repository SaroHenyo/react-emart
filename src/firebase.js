import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBOEuNQuL-gprz0JiVvZHHIckZIqtww_3U',
  authDomain: 'react-emart-f8262.firebaseapp.com',
  projectId: 'react-emart-f8262',
  storageBucket: 'react-emart-f8262.appspot.com',
  messagingSenderId: '63965601000',
  appId: '1:63965601000:web:330c1abf7a6dc8bf563d5d',
}
// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig)

// Use for db
const db = firebaseapp.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { db, auth, googleProvider, facebookProvider }
