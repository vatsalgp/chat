import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// const db = firebase.firestore();

export const getAuthState = () => {
    if (!auth.currentUser)
        return null;
    else {
        const { displayName, email, photoURL, uid } = auth.currentUser;
        return { displayName, email, photoURL, uid };
    }
};

export const signIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    return getAuthState();
}

export const signOut = async () => {
    await auth.signOut();
    return getAuthState();
};