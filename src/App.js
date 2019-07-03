import React, { Fragment } from "react";

import "./styles/global";

import Main from "./pages/Main";
import GlobalStyle from "./styles/global";

const App = () => (
  <Fragment>
    <Main />
    <GlobalStyle />
  </Fragment>
);

export default App;
