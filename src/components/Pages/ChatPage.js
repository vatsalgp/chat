import React from "react";

class ChatPage extends React.Component {

    state = { message: "" }

    onSubmitHandler = event => {
        event.preventDefault();
    }

    onChangeHandler = event => {
        this.setState({ message: event.target.value });
    }

    render() {
        return (
            <div>
                <form style={{ position: "fixed", bottom: 0 }}>
                    <div style={{ display: "inline-block" }}>
                        <input
                            type="text"
                            name="name"
                            style={{ marginLeft: "20px", width: "90vw" }}
                            onChange={this.onChangeHandler} />
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <input
                            class="submit-btn"
                            type="submit"
                            value=">"
                            onClick={this.onSubmitHandler} />
                    </div>
                </form>
            </div>
        );
    }
}

export default ChatPage;