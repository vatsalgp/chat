import React from "react";
import { connect } from "react-redux";

import SignInPage from "./Pages/SignPage";
import ListPage from "./Pages/ListPage";
import ChatPage from "./Pages/ChatPage";

const App = ({ auth, page }) => {
  if (!auth)
    return <SignInPage />;
  else if (!page)
    return <ListPage />;
  else
    return <ChatPage />;
}

const mapStateToProps = ({ page, auth }) => {
  return {
    page,
    auth
  };
};

export default connect(mapStateToProps)(App);