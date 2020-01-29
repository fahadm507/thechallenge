import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const config = {
    apiKey: "AIzaSyAOFz9Ib2k_o91lUq5o1f4U9IJmioYOFVQ",
    authDomain: "thechallenge-e10a9.firebaseapp.com",
    databaseURL: "https://thechallenge-e10a9.firebaseio.com",
    projectId: "thechallenge",
    storageBucket: "thechallenge.appspot.com",
    messagingSenderId: "640281149926",
    appId: "1:640281149926:web:6711a5acb9be2399c19627",
    measurementId: "G-GRDHZ3S20P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
// provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
