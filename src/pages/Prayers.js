import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Global, css, jsx } from "@emotion/core";


//import { loadState } from "./localStorage";

import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";

function Prayers() {
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
  <div>
    <HomeNav />
      Here it is: {test}
      <Footer/>
  </div>
  );

}



export default Prayers;
