import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Global, css, jsx } from "@emotion/core";
import './App.css';

import { Provider } from "react-redux";
import store from "./services/redux/store";

//import { loadState } from "./localStorage";

import Prayers from "./pages/Prayers";
import Home from "./pages/Home";

function App() {
  const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: 'black';
    }
  `;

  return (
  <BrowserRouter>
    <Global styles={globalStyles} />
    <Provider store={store}>
      <Switch>
          <Route path="/prayers" component={Prayers} />
          <Route path="/" component={Home} />
      </Switch>
    </Provider>
  </BrowserRouter>
  );

}



export default App;
