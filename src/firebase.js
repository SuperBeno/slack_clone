import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAphtgj_TUmsc5p5b1s8T2lI4NlKv0geS8",
  authDomain: "slack-clone-c9a81.firebaseapp.com",
  databaseURL: "https://slack-clone-c9a81.firebaseio.com",
  projectId: "slack-clone-c9a81",
  storageBucket: "slack-clone-c9a81.appspot.com",
  messagingSenderId: "513584410400",
  appId: "1:513584410400:web:c8faf7d9be095715523145",
  measurementId: "G-WPGDHCF6QR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
