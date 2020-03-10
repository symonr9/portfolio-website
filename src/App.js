import React, { useEffect, useState } from 'react';
import { Global, css, jsx } from "@emotion/core";
import './App.css';

import { Provider } from "react-redux";
import store from "./redux/store";

//import { loadState } from "./localStorage";

import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

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

  const mainStyles = css`
    min-height: 100vh;

    width: 90%;
    max-width: 1000px;

    margin: auto;
    margin-top: 75px;
  `;

  const [test, setTest] = useState("dsfsd");

  const fetchData = () => {
    fetch("http://localhost:9000/test")
      .then(res => res.text())
        .then(
          res => {
            setTest(res);
            console.log("res is: ", res);
          }
          );
  }

  
  useEffect(fetchData);
  console.log("this is test: ", test);

  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Provider store={store}>
              <Navbar />
              <div css={mainStyles}>
                  <Switch>
                      <Route path="/" component={Home} />
                  </Switch>
              </div>
              <Footer />
      </Provider>
    </BrowserRouter>
  );
}



export default App;
