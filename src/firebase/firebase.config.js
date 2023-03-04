// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId


    apiKey: "AIzaSyAiEaoPrCgtRAs8Drux26Mfjru6fk_rMIE",
    authDomain: "genius-car-client-a5e8c.firebaseapp.com",
    projectId: "genius-car-client-a5e8c",
    storageBucket: "genius-car-client-a5e8c.appspot.com",
    messagingSenderId: "624751570638",
    appId: "1:624751570638:web:77454895839491d7876a9f"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;