import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const messages = db.collection("messages");
const recipients = db.collection("recipients");

export const getAuthState = () => {
    if (!auth.currentUser)
        return null;
    else {
        const { displayName, email, photoURL, uid } = auth.currentUser;
        return { displayName, email, photoURL, uid };
    }
};

export const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
}

export const signOut = () => auth.signOut();

export const sendMessage = async ({ message, to, from }) => {
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    const query = {
        message,
        createdAt,
        from
    };
    const p1 = messages.doc(from).collection(to).add(query);
    const p2 = messages.doc(to).collection(from).add(query);
    const p3 = recipients.doc(to).set({ [from]: null }, { merge: true });
    const p4 = recipients.doc(from).set({ [to]: null }, { merge: true });
    const results = await Promise.all([p1, p2, p3, p4]);
    const response = await messages.doc(from).collection(to).doc(results[0].id).get();
    return response.data();
};

export const getMessages = ({ to, from }) => {
    return messages.doc(from).collection(to).orderBy("createdAt").get();
};

export const getRecipients = async from => {
    const response = await recipients.doc(from).get();
    return response.data();
};