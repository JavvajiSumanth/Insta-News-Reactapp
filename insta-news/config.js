// firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Insta News's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtrzjcLVKaOZqgswdeGT6oUnT88vy-Gt8",
    authDomain: "insta-news-8bd2e.firebaseapp.com",
    projectId: "insta-news-8bd2e",
    storageBucket: "insta-news-8bd2e.appspot.com",
    messagingSenderId: "578928149957",
    appId: "1:578928149957:web:51a3aaecd86f6918faf7ac",
    measurementId: "G-0D66H3BWP9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };