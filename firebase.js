import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBiEOqbQ-2Kw-D1sUW_7aFme5imcC8CbSs",
    authDomain: "busbookingproject-9ac19.firebaseapp.com",
    projectId: "busbookingproject-9ac19",
    storageBucket: "busbookingproject-9ac19.appspot.com",
    messagingSenderId: "953665120392",
    appId: "1:953665120392:web:7d46ec463c110adb36973d",
    measurementId: "G-261LTFFRFM"
};

const app = firebase.initializeApp(config);
// export const auth = getAuth(app);
// firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireauth= firebase.auth;
export const db = getFirestore(app);


const settings = {timestampsInSnapshots : true};

firebase.firestore().settings(settings);
export const firestore = firebase.firestore();
export const firebasestore = firebase.firestore;
