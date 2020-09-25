import React from "react";
import { connect } from "react-redux";

import { showChatPage } from "../../actions";

const ListItem = ({ email, showChatPage }) => (
    <a
        href="#!"
        className="collection-item"
        onClick={() => showChatPage(email)}
    >
        {email}
    </a>
);

export default connect(null, { showChatPage })(ListItem);
