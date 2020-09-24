import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// const db = firebase.firestore();

export const getAuthState = () => auth.currentUser;

export const signIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    return getAuthState();
}

export const signOut = async () => {
    await auth.signOut();
    return getAuthState();
};