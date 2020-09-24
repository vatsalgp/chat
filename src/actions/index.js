import { getAuthState, signIn as fIn, signOut as fOut, sendMessage as fSend, getMessages as fGet, getRecipients as fRec } from "../firebase";

const updateCache = payload => {
    window.localStorage.setItem("auth", JSON.stringify(payload));
};

export const fetchRecipients = from => async dispatch => {
    const payload = await fRec(from);
    dispatch({
        type: "FETCH_RECIPIENTS",
        payload
    });
};

export const sendMessage = ({ message, to }) => async dispatch => {
    const from = getAuthState().email;
    const messageData = await fSend({ message, to, from });
    dispatch({
        type: "FETCH_MESSAGE",
        payload: { messageData, to }
    });
};

export const getMessages = to => async dispatch => {
    const from = getAuthState().email;
    const response = await fGet({ to, from });
    const messages = [];
    response.forEach(doc => messages.push(doc.data()));
    console.log(messages);
    dispatch({
        type: "FETCH_MESSAGES",
        payload: { messagesData: messages, to }
    });
};

export const signIn = () => async dispatch => {
    await fIn();
    const payload = getAuthState();
    updateCache(payload);
    dispatch({
        type: "FETCH_USER",
        payload
    });
    fetchRecipients(getAuthState().email);
}

export const signOut = () => async dispatch => {
    await fOut();
    const payload = getAuthState();
    updateCache(payload);
    dispatch({
        type: "FETCH_USER",
        payload
    });
}

export const fetchUser = () => {
    const payload = getAuthState();
    updateCache(payload);
    return {
        type: "FETCH_USER",
        payload
    };
};

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