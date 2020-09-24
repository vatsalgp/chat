import React from "react";

import { connect } from "react-redux";

import { sendMessage, getMessages } from "../../actions"

class ChatPage extends React.Component {
    state = { message: "" }

    componentDidMount() {
        if (this.props.messages == null)
            this.props.getMessages(this.props.to);
    }

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.sendMessage({ to: this.props.to, message: this.state.message });
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
        console.log(this.props);
        if (this.props.messages)
            return this.props.messages.map(message => (
                <div key={message.createdAt}>{message.message}</div>
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

export default connect(mapStateToProps, { sendMessage, getMessages })(ChatPage);