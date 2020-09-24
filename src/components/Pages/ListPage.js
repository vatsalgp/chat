import React from "react";

import { connect } from "react-redux";
import { showChatPage } from "../../actions";

const ListPage = ({ message, showChatPage }) => {
    const jsx = [];
    for (let email in message)
        jsx.push(
            <div className="card horizontal" onClick={() => showChatPage(email)} key={email}>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        );
    return jsx;
};

const mapStateToProps = state => {
    return {
        message: state.message
    };
}

export default connect(mapStateToProps, { showChatPage })(ListPage);