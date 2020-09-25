import React from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { fetchRecipients } from "../../actions";

class ListPage extends React.Component {
    componentDidMount() {
        if (this.props.auth)
            this.props.fetchRecipients(this.props.auth.email);
    }

    render() {
        const jsx = [];
        for (let email in this.props.message)
            jsx.push(<ListItem email={email} key={email} />);
        return jsx;
    }
};

const mapStateToProps = ({ message, auth }) => {
    return {
        message,
        auth
    };
}

export default connect(mapStateToProps, { fetchRecipients })(ListPage);