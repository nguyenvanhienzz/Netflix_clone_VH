import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVms7jRFhaCDyaCJUl57TquVTf24Kd_TY",
    authDomain: "netflix-clone-e9dae.firebaseapp.com",
    projectId: "netflix-clone-e9dae",
    storageBucket: "netflix-clone-e9dae.appspot.com",
    messagingSenderId: "38570532586",
    appId: "1:38570532586:web:daafa4d0454c25ee6fc193"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export default db;