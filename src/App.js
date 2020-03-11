import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Global, css } from "@emotion/core";

import './App.css';

import { Provider } from "react-redux";
import store from "./services/redux/store";

//import { loadState } from "./localStorage";

import { CSSTransition } from 'react-transition-group'

import HomeNav from './components/HomeNav';
import Prayers from "./pages/Prayers";
import MyPillars from "./pages/MyPillars";
import CreatePillars from "./pages/CreatePillars";
import Profile from "./pages/Profile";
import Home from "./pages/Home";


const routes = [
  { path: '/prayers', name: 'Prayers', Component: Prayers },
  { path: '/pillars/create', name: 'Create', Component: CreatePillars },
  { path: '/pillars/', name: 'My Pillars', Component: MyPillars },
  { path: '/profile', name: 'Profile', Component: Profile },
  { path: '/', name: 'Home', Component: Home }
]

function App() {

  const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Muli|Source+Sans+Pro:700&display=swap');

    body {
        margin: 0;
        font-family: "Muli", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: 'black';
    }
  `;

  return (
  <BrowserRouter>
  
    <Global styles={globalStyles} />
    <Provider store={store}>
      <HomeNav />
      <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path}>
              {({ match }) => (
                <CSSTransition
                in={match != null}
                timeout={10000}
                unmountOnExit
                appear>
                  <Component />
                </CSSTransition>
              )}
            </Route>
          ))}
      </Switch>
    </Provider>
  </BrowserRouter>
  );

}




export default App;
