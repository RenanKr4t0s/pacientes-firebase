// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDox2Y4Wz3aX-cjQAdtz2EG6Y2IOMuZ4m8",
  authDomain: "react-bases-5e83b.firebaseapp.com",
  databaseURL: "https://react-bases-5e83b-default-rtdb.firebaseio.com",
  projectId: "react-bases-5e83b",
  storageBucket: "react-bases-5e83b.appspot.com",
  messagingSenderId: "303854143697",
  appId: "1:303854143697:web:a6576363a94fb5d1715df0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export default database;