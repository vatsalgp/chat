import React from "react";
import { connect } from "react-redux";

import { signIn } from "../../actions";

const SignInHeader = ({ signIn }) => (
    <nav>
        <div className="nav-wrapper">
            <ul id="nav-mobile" className="left">
                <li><button className="btn" onClick={signIn}>Sign In</button></li>
            </ul >
        </div>
    </nav>
);

export default connect(null, { signIn })(SignInHeader);