import React from "react";
import { connect } from "react-redux";

import NewForm from "./NewForm";
import { signIn, signOut, showListPage } from "../actions";

const Header = ({ auth, signIn, signOut, page, showListPage }) => {
    const SignButton = () => {
        if (auth)
            return <button onClick={signOut}>Sign Out</button>;
        else
            return <button onClick={signIn}>Sign In With Google</button>;
    };

    const ChatHeader = () => (
        <>
            <li><span>{page}</span></li>
            <li><button onClick={showListPage}>Back</button></li>
        </>
    );

    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left">
                    <li><SignButton /></li>
                </ul >
                <ul id="nav-mobile" className="right">
                    {page ? <ChatHeader /> : <li><NewForm /></li>}
                </ul >
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        page: state.page
    }
}

export default connect(mapStateToProps, { signIn, signOut, showListPage })(Header);