import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// export const firebaseConfig = {
    // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPYfQSbzUdHL_iTQ2FdZEi_iAbKAV0a_Q",
    authDomain: "blog-mongker.firebaseapp.com",
    projectId: "blog-mongker",
    storageBucket: "blog-mongker.appspot.com",
    messagingSenderId: "665080669217",
    appId: "1:665080669217:web:034630c21cae6f19492f60",
    measurementId: "G-3Q7KG4NN62"
};
console.log('NEXT_PUBLIC_FIREBASE_API_KEY', process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
const storage = firebase.storage();
export { auth, db, now, storage, firebase };
console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');
