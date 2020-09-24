import React from "react";
import { connect } from "react-redux";

import { signIn, signOut, showListPage } from "../actions";
import NewForm from "./NewForm";

const Header = ({ auth, signIn, signOut, page, showListPage }) => {
    const SignButton = () => {
        if (auth)
            return <button onClick={signOut}>Sign Out</button>;
        else
            return <button onClick={signIn}>Sign In With Google</button>;
    };

    const ListHeader = () => (
        <li style={{}}><NewForm /></li>
    );

    const ChatHeader = () => (
        <>
            <li><span>{page}</span></li>
            <li><button onClick={showListPage}>Back</button></li>
        </>
    );

    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" class="left">
                    <li><SignButton /></li>
                </ul >
                <ul id="nav-mobile" class="right">
                    {page ? <ChatHeader /> : <ListHeader />}
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