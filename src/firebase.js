
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBYrDtLNg9WWclP4wjHoOyMFnCTvO2re5U",
    authDomain: "nutricion-5e322.firebaseapp.com",
    projectId: "nutricion-5e322",
    storageBucket: "nutricion-5e322.appspot.com",
    messagingSenderId: "317810319352",
    appId: "1:317810319352:web:c6455d4e3f318e3ed7000d",
    measurementId: "G-BHMKENWJRW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Analytics
const analytics = getAnalytics(app);

export { db }