import React from "react";
import { connect } from "react-redux";

import { sendMessage, fetchMessages } from "../../actions"
import "./ChatPage.css"

class ChatPage extends React.Component {
    state = { message: "" }

    componentDidMount() {
        this.props.fetchMessages(this.props.to, this);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onSubmitHandler = event => {
        event.preventDefault();
        sendMessage({ to: this.props.to, message: this.state.message });
        this.setState({ message: "" })
    }

    onChangeHandler = event => {
        this.setState({ message: event.target.value });
    }

    renderForm() {
        return (
            <form style={{ position: "fixed", bottom: 0 }}>
                <div style={{ display: "inline-block" }}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.message}
                        style={{ marginLeft: "20px", width: "90vw" }}
                        onChange={this.onChangeHandler} />
                </div>
                <div style={{ display: "inline-block" }}>
                    <input
                        type="submit"
                        value=">"
                        onClick={this.onSubmitHandler} />
                </div>
            </form>
        );
    }

    renderChat() {
        if (this.props.messages)
            return this.props.messages.map(message => (
                <div
                    className={message.email === this.props.to ? "received" : "sent"}
                    key={message.createdAt}
                >{message.message}</div>
            ));
        else
            return <div></div>;
    }

    render() {
        return (
            <div>
                {this.renderChat()}
                {this.renderForm()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const to = state.page;
    return {
        to,
        messages: state.message[to]
    };
};

export default connect(mapStateToProps, { fetchMessages })(ChatPage);