import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJxWGkmtdT7LmRMZgR_GR-y9A-T4M7muE",
    authDomain: "cooking-site-c58f7.firebaseapp.com",
    projectId: "cooking-site-c58f7",
    storageBucket: "cooking-site-c58f7.appspot.com",
    messagingSenderId: "501647830772",
    appId: "1:501647830772:web:21159a45b9df76b3ce38a1"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore =  firebase.firestore()

export { projectFirestore }