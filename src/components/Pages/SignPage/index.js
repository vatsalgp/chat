import React from "react";
import { connect } from "react-redux";

import { signIn } from "../../../actions";
import "./index.css";

const SignInPage = ({ signIn }) => (
    <button
        className="btn-large red centered-btn"
        onClick={signIn}
    >
        Sign In With Google
    </button >
);

export default connect(null, { signIn })(SignInPage);
