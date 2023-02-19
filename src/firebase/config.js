import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtdNqB_x1tZtXxKdhK6snycHkaTC5bX-s",
  authDomain: "cloudnoise-news.firebaseapp.com",
  databaseURL: "https://cloudnoise-news-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cloudnoise-news",
  storageBucket: "cloudnoise-news.appspot.com",
  messagingSenderId: "574099894420",
  appId: "1:574099894420:web:854cf61d614e95eb100481"
};

 //init firebase
 initializeApp(firebaseConfig)

 //init services
 const db = getFirestore()

//  //init firebase auth
//  const auth = getAuth()

 export { db }
 