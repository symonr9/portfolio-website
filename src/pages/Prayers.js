import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Global, css, jsx } from "@emotion/core";


//import { loadState } from "./localStorage";

import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";

import useCommonStyles from '../styles/common';

function Prayers() {
  const common = useCommonStyles();
  const [test, setTest] = useState(null);

  const fetchData = () => {
    fetch("http://localhost:9000/pillars")
        .then(
          res => {
         //   setTest(res);
            console.log("res is: ", res);
          }
          );
  }

  
  useEffect(fetchData);
  console.log("this is test: ", test);

  return (
  <div>
    <div className={common.pageContainerDiv}>
        <div className={common.pageDiv}>
            <div className={common.desertPageBodyDiv}>
                <br/>
                {test}
            </div>
        </div>
        
    </div>
  </div>
  );

}



export default Prayers;
