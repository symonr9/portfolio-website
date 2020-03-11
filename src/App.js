import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Global, css, jsx } from "@emotion/core";
import './App.css';

import { Provider } from "react-redux";
import store from "./services/redux/store";

//import { loadState } from "./localStorage";

import Browse from "./pages/Browse";
import Home from "./pages/Home";

function App() {
  const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    body {
        margin: 0;
        font-family: "Muli", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
  `;

  return (
  <BrowserRouter>
    <Global styles={globalStyles} />
    <Provider store={store}>
      <Switch>
          <Route path="/browse" component={Browse} />
          <Route path="/" component={Home} />
      </Switch>
    </Provider>
  </BrowserRouter>
  );

}



export default App;
