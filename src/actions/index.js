import { getAuthState, signIn as fIn, signOut as fOut } from "../firebase";

export const signIn = () => async dispatch => {
    const payload = await fIn();
    dispatch({
        type: "FETCH_USER",
        payload
    });
}

export const signOut = () => async dispatch => {
    const payload = await fOut();
    dispatch({
        type: "FETCH_USER",
        payload
    });
}

export const fetchUser = () => {
    return {
        type: "FETCH_USER",
        payload: getAuthState()
    };
};

export const showListPage = () => {
    return {
        type: "TOGGLE_PAGE",
        payload: null
    };
};

export const togglePage = person => {
    return {
        type: "TOGGLE_PAGE",
        payload: person
    };
};