import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC8zdLS-jHrg8xIt7qCT2EoWgrmRoX2MYM",
  authDomain: "c-71-56844.firebaseapp.com",
  projectId: "c-71-56844",
  storageBucket: "c-71-56844.appspot.com",
  messagingSenderId: "549398081008",
  appId: "1:549398081008:web:5957a58ea1950b36658135"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
