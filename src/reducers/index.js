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

const reducers = combineReducers({
    auth: authReducer,
    page: pageReducer,
});

export default reducers;