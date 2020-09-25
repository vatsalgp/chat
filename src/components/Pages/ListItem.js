import React from "react";
import { connect } from "react-redux";

import { showChatPage } from "../../actions";

const ListItem = ({ email, showChatPage }) => (
    <div className="card horizontal" onClick={() => showChatPage(email)}>
        <div className="card-stacked">
            <div className="card-content">
                <p>{email}</p>
            </div>
        </div>
    </div>
);

export default connect(null, { showChatPage })(ListItem);
