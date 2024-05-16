import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseconfig = {
  apiKey: "AIzaSyADUXt_mHrNM2AzEfKNUyPglbRhQnSGZG4",
  authDomain: "pedras-boreales-back.firebaseapp.com",
  projectId: "pedras-boreales-back",
  storageBucket: "pedras-boreales-back.appspot.com",
  messagingSenderId: "896649143688",
  appId: "1:896649143688:web:2990fc0818a5ac263f063d"

};
const app = initializeApp(firebaseconfig);
export const db = getFirestore( app )

