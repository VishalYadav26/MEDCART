import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA3eJrnsSNpF1mhOKJPQwvmh5gOy6M0k60",
  authDomain: "medcart-8df45.firebaseapp.com",
  projectId: "medcart-8df45",
  storageBucket: "medcart-8df45.appspot.com",
  messagingSenderId: "796955429157",
  appId: "1:796955429157:web:595b0079b08cf90fc5b2cc"
};

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);


 export {app,auth,db}

//  https://console.firebase.google.com/u/0/project/medcart-8df45/authentication/users
//  https://console.firebase.google.com/u/0/project/medcart-8df45/firestore/data/~2FAppointment
//  https://console.firebase.google.com/u/0/project/medcart-8df45/firestore/data/~2FContact






// apiKey: "AIzaSyDIsoRKkgaKbBaaW9m_IP-8ipxF-19m0uk",
// authDomain: "xoxo-db.firebaseapp.com",
// projectId: "xoxo-db",
// storageBucket: "xoxo-db.appspot.com",
// messagingSenderId: "648019716902",
// appId: "1:648019716902:web:bf83448bf3f9b3e689afe7",
// measurementId: "G-XZH40XX5RY",