import React from "react";
import { connect } from "react-redux";

import ChatPageHeader from "./Headers/ChatPageHeader";
import ChatListHeader from "./Headers/ChatListHeader";
import SignInHeader from "./Headers/SignInHeader";

const Header = ({ auth, page }) => {
    if (!auth)
        return <SignInHeader />;
    else if (!page)
        return <ChatListHeader />;
    else
        return <ChatPageHeader />;
};

const mapStateToProps = ({ auth, page }) => {
    return {
        auth,
        page
    }
}

export default connect(mapStateToProps)(Header);