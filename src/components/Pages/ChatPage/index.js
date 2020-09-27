import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { sendMessage, fetchMessages } from "../../../actions";
import "./ChatPage.css"

class ChatPage extends React.Component {
    state = { message: "" }

    componentDidMount() {
        this.props.fetchMessages(this.props.to, this);
    }

    componentDidUpdate() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onSubmitHandler = event => {
        event.preventDefault();
        sendMessage({ to: this.props.to, message: this.state.message });
        this.setState({ message: "" });
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
                        style={{ marginLeft: "5vw", width: "80vw" }}
                        onChange={this.onChangeHandler} />
                </div>
                <div style={{ display: "inline-block" }}>
                    <input
                        type="submit"
                        value="Send"
                        onClick={this.onSubmitHandler} />
                </div>
            </form>
        );
    }

    renderChat() {
        let jsx = [];
        if (this.props.messages)
            jsx = this.props.messages.map(message => (
                < li
                    className={(message.from === this.props.to ? "received" : "sent") + " message"}
                    key={message.createdAt}
                >
                    <p className="chat">{message.message}</p>
                </ li>
            ));
        return <ul style={{ marginBottom: "48px" }}>{jsx}</ul>;
    }

    render() {
        return (
            <div>
                <Header />
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