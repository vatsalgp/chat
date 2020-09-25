import React from "react";
import { connect } from "react-redux";

import { signOut, showListPage } from "../../actions";

const ChatPageHeader = ({ signOut, page, showListPage }) => (
    <nav>
        <div className="nav-wrapper">
            <ul id="nav-mobile" className="left">
                <li><button className="btn" onClick={signOut}>Sign Out</button></li>
            </ul >
            <a href="#!" className="brand-logo center" >{page}</a>
            <ul id="nav-mobile" className="right">
                <li><button className="btn" onClick={showListPage}>Back</button></li>
            </ul >
        </div>
    </nav>
);

const mapStateToProps = ({ page }) => {
    return { page };
};

export default connect(mapStateToProps, { signOut, showListPage })(ChatPageHeader);