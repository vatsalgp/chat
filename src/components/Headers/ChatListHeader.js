import React from "react";
import { connect } from "react-redux";

import NewForm from "./NewForm";
import { signOut } from "../../actions";

const ChatListHeader = ({ signOut }) => (
    <nav>
        <div className="nav-wrapper">
            <ul id="nav-mobile" className="left">
                <li><button className="btn" onClick={signOut}>Sign Out</button></li>
            </ul >
            <ul id="nav-mobile" className="right">
                <li><NewForm /></li>
            </ul >
        </div>
    </nav>
);

export default connect(null, { signOut })(ChatListHeader);