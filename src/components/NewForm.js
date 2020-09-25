import React from "react";
import { connect } from "react-redux";
import { showChatPage } from "../actions";

class NewForm extends React.Component {
    state = { email: "" }

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.showChatPage(this.state.email);
    }

    onChangeHandler = event => {
        this.setState({ email: event.target.value });
    }

    render() {
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
                        type="submit"
                        value="+"
                        onClick={this.onSubmitHandler}
                    />
                </div>
            </form>
        );
    }
}

export default connect(null, { showChatPage })(NewForm);