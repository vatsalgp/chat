import React from "react";

import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const Header = ({ auth, signIn, signOut }) => {
    if (auth)
        return <button onClick={signOut}>Sign Out</button>;
    else
        return <button onClick={signIn}>Sign In With Google</button>;
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { signIn, signOut })(Header);