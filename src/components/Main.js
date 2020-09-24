import React from "react";

import { connect } from "react-redux";

import SignInPage from "./Pages/SignInPage.js";
import ListPage from "./Pages/ListPage.js";
import ChatPage from "./Pages/ChatPage.js";

const Main = ({ page, auth }) => {
    if (!auth)
        return <SignInPage />;
    else if (!page)
        return <ListPage />;
    else
        return <ChatPage />;
}

const mapStateToProps = ({ page, auth }) => {
    return {
        page,
        auth
    };
};

export default connect(mapStateToProps)(Main);