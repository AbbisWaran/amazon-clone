import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPNDT8etpTIgIbiuGI5DPS7WJanpa_-e8",
  authDomain: "clone-35066.firebaseapp.com",
  projectId: "clone-35066",
  storageBucket: "clone-35066.appspot.com",
  messagingSenderId: "410985036388",
  appId: "1:410985036388:web:0af49095ab92c51c13fd71",
  measurementId: "G-NTQW533WFV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
