import firebase from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'



  const firebaseConfig = {
    apiKey: "AIzaSyCq78odGLuY3TuIiXGET5g-L0TXwsh46Xg",
    authDomain: "marketplace-3de95.firebaseapp.com",
    projectId: "marketplace-3de95",
    storageBucket: "marketplace-3de95.appspot.com",
    messagingSenderId: "850357072170",
    appId: "1:850357072170:web:578a602b9fdf61ca0bee53",
    measurementId: "G-NQ75SDZVXP"
};

const fire = firebase.initializeApp(firebaseConfig)


export default fire;