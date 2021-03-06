import { combineReducers } from "redux";

const authReducer = (state = null, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return action.payload;
        default:
            return state;
    }
}

const pageReducer = (state = null, action) => {
    switch (action.type) {
        case "TOGGLE_PAGE":
            return action.payload;
        default:
            return state;
    }
}

const messageReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH_MESSAGES":
            return { ...state, [payload.to]: payload.messagesData };
        case "FETCH_RECIPIENTS":
            return { ...payload, ...state };
        case "REMOVE_RECIPIENTS":
            return {};
        default:
            return state;
    }
};

const reducers = combineReducers({
    auth: authReducer,
    page: pageReducer,
    message: messageReducer
});

export default reducers;