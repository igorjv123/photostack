import * as firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBCnIYKLvuz8LYPdHwnhdktwbeAJXPNlLQ",
    authDomain: "fotostack-dafc5.firebaseapp.com",
    databaseURL: "https://fotostack-dafc5.firebaseio.com",
    projectId: "fotostack-dafc5",
    storageBucket: "fotostack-dafc5.appspot.com",
    messagingSenderId: "921802360494",
    appId: "1:921802360494:web:861f77a3f9bbc3f1"
  };
firebase.initializeApp(firebaseConfig)
firebase.firestore()



export default firebase;