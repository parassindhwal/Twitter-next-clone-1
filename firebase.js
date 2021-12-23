// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYROqEZKPhfgjZtmSMlSe5IuQ1cE87rWM",
    authDomain: "twitter-clone-1-bc5a1.firebaseapp.com",
    projectId: "twitter-clone-1-bc5a1",
    storageBucket: "twitter-clone-1-bc5a1.appspot.com",
    messagingSenderId: "1032337723897",
    appId: "1:1032337723897:web:e7a5dfae56cf83cdad2d28"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };