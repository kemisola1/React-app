import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJzzOcO767wXIZbww2p2SdhX6ifOtxf8Y",
    authDomain: "todo-app-90e57.firebaseapp.com",
    projectId: "todo-app-90e57",
    storageBucket: "todo-app-90e57.appspot.com",
    messagingSenderId: "757926053439",
    appId: "1:757926053439:web:3691f080ac19b56cc25a8a",
    measurementId: "G-DDYLS0BYSB"
  };

  const app = initializeApp (firebaseConfig);
  const db = getFirestore(app);

  export { db };