// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP95zwidneFucq3QamwY4_VdS_Gus6Ex8",
  authDomain: "yanseen-779c4.firebaseapp.com",
  projectId: "yanseen-779c4",
  storageBucket: "yanseen-779c4.appspot.com",
  messagingSenderId: "67346544441",
  appId: "1:67346544441:web:f41efec56fada42326dae8",
  measurementId: "G-CWRBKD6Y5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db =  firebase.firestore(app); 
export const partcipantRef = db.collection("participants");
export {firebase}