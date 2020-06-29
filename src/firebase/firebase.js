import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFb3kCh4_htv1FBxiIgGMYdDHuw4s9Pxk",
  authDomain: "react-firebase-storage-82f72.firebaseapp.com",
  databaseURL: "https://react-firebase-storage-82f72.firebaseio.com",
  projectId: "react-firebase-storage-82f72",
  storageBucket: "react-firebase-storage-82f72.appspot.com",
  messagingSenderId: "502672863505",
  appId: "1:502672863505:web:5f2cf81bcf6294eb779cb0",
  measurementId: "G-GT1KTKKM7Z",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
