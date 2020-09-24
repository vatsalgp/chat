import { getAuthState, signIn as fIn, signOut as fOut, sendMessage as fMsg } from "../firebase";

const updateCache = payload => {
    window.localStorage.setItem("auth", JSON.stringify(payload));
};

//TODO
export const sendMessage = ({ message, to }) => {
    const from = getAuthState().email;
    fMsg({ message, to, from });
};

export const signIn = () => async dispatch => {
    const payload = await fIn();
    updateCache(payload);
    dispatch({
        type: "FETCH_USER",
        payload
    });
}

export const signOut = () => async dispatch => {
    const payload = await fOut();
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