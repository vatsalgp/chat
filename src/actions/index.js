import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

import firebaseConfig from "../firebaseConfig";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const messagesRef = db.collection("messages");
const recipientsRef = db.collection("recipients");

const getAuthState = () => {
    if (!auth.currentUser)
        return null;
    else {
        const { displayName, email, photoURL, uid } = auth.currentUser;
        return { displayName, email, photoURL, uid };
    }
};

const updateCache = payload => {
    window.localStorage.setItem("auth", JSON.stringify(payload));
};

export const sendMessage = ({ message, to }) => {
    const from = getAuthState().email;
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    const query = {
        message,
        createdAt,
        from
    };
    messagesRef.doc(from).collection(to).add(query);
    messagesRef.doc(to).collection(from).add(query);
    recipientsRef.doc(to).set({ [from]: null }, { merge: true });
    recipientsRef.doc(from).set({ [to]: null }, { merge: true });
};

export const fetchMessages = (to, chat) => async dispatch => {
    const from = getAuthState().email;
    const ref = messagesRef.doc(from).collection(to).orderBy("createdAt");
    chat.unsubscribe = ref.onSnapshot(snapshot => {
        const msgs = [];
        snapshot.forEach(doc => msgs.push(doc.data()));
        dispatch({
            type: "FETCH_MESSAGES",
            payload: { messagesData: msgs, to }
        });
    });
};

export const fetchRecipients = (email, component) => async dispatch => {
    component.unsubscribe = recipientsRef.doc(email).onSnapshot(snapshot =>
        dispatch({
            type: "FETCH_RECIPIENTS",
            payload: snapshot.data()
        })
    );
};

export const signIn = () => async dispatch => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    const payload = getAuthState();
    updateCache(payload);
    dispatch({
        type: "FETCH_USER",
        payload
    });
}

export const signOut = () => async dispatch => {
    await auth.signOut();
    const payload = getAuthState();
    updateCache(payload);
    dispatch({
        type: "FETCH_USER",
        payload
    });
    dispatch({
        type: "REMOVE_RECIPIENTS",
    });
}

export const showListPage = () => {
    return {
        type: "TOGGLE_PAGE",
        payload: null
    };
};

export const showChatPage = person => {
    return {
        type: "TOGGLE_PAGE",
        payload: person
    };
};