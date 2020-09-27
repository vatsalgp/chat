import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { fetchRecipients, showChatPage } from "../../../actions";

class ListPage extends React.Component {
    componentDidMount() {
        this.props.fetchRecipients(this.props.auth.email, this);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    renderList() {
        const jsx = [];
        for (let email in this.props.message)
            jsx.push(this.renderListItem(email));
        return <div className="collection">{jsx}</div>;
    }

    renderListItem(email) {
        return (
            <a
                href="#!"
                className="collection-item"
                onClick={() => this.props.showChatPage(email)}
                key={email}
            >
                {email}
            </a >
        );
    }
    render() {
        return (
            <div>
                <Header />
                {this.renderList()}
            </div>
        );
    }
};

const mapStateToProps = ({ message, auth }) => {
    return {
        message,
        auth
    };
}

export default connect(mapStateToProps, { showChatPage, fetchRecipients })(ListPage);