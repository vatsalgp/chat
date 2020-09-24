import React from "react";
import { connect } from "react-redux";

import SignInPage from "./Pages/SignInPage.js";
import ListPage from "./Pages/ListPage.js";
import ChatPage from "./Pages/ChatPage.js";
import { fetchRecipients } from "../actions";

class Main extends React.Component {
    componentDidMount() {
        if (this.props.auth)
            this.props.fetchRecipients(this.props.auth.email);
    }
    render() {
        if (!this.props.auth)
            return <SignInPage />;
        else if (!this.props.page)
            return <ListPage />;
        else
            return <ChatPage />;
    }
}

const mapStateToProps = ({ page, auth }) => {
    return {
        page,
        auth
    };
};

export default connect(mapStateToProps, { fetchRecipients })(Main);