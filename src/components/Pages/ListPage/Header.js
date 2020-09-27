import React from "react";
import { connect } from "react-redux";

import { signOut, showChatPage } from "../../../actions";

class Header extends React.Component {
    state = { email: "" }

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.showChatPage(this.state.email);
    }

    onChangeHandler = event => {
        this.setState({ email: event.target.value });
    }

    renderForm() {
        return (
            <form>
                <div style={{ display: "inline-block" }}>
                    <input
                        placeholder="Email Address"
                        type="email"
                        name="name"
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div style={{ display: "inline-block" }}>
                    <input
                        className="btn"
                        type="submit"
                        value="Add"
                        onClick={this.onSubmitHandler}
                    />
                </div>
            </form>
        );
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left">
                        <li><button className="btn" onClick={this.props.signOut}>Sign Out</button></li>
                    </ul >
                    <ul id="nav-mobile" className="right">
                        <li>{this.renderForm()}</li>
                    </ul >
                </div>
            </nav>
        );
    }
}

export default connect(null, { showChatPage, signOut })(Header);