import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDox2Y4Wz3aX-cjQAdtz2EG6Y2IOMuZ4m8",
  authDomain: "react-bases-5e83b.firebaseapp.com",
  projectId: "react-bases-5e83b",
  storageBucket: "react-bases-5e83b.appspot.com",
  messagingSenderId: "303854143697",
  appId: "1:303854143697:web:a6576363a94fb5d1715df0"
};

const fireDb = initializeApp(firebaseConfig);

export default fireDb.database().ref()