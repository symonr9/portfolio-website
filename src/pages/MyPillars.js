import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";

import { makeStyles } from "@material-ui/core/styles";

import useCommonStyles from "../styles/common";

const useStyles = makeStyles({});

async function getData() 
{
    await fetch("http://localhost:9000/pillars")
      .then(
        async (res) => {
          return await res.json()
        }
        );
}

function MyPillars() {
  const [pillars, setPillars] = useState(null);

  //setPillars(getData());


  /*
  const fetchData = async () => {
    fetch("http://localhost:9000/pillars")
      .then(res => res.text())
        .then(
          res => {
            setPillars(res);
            console.log("res is: ", res);
          }
          );
  }*/

  /*
  useEffect(fetchData());
  if (!pillars){
      return null;
  }
  */
  console.log("this is test: ", pillars);

  const classes = useStyles();
  const common = useCommonStyles();

  return (
      <div className={common.pageContainerDiv}>
        <div className={common.pageDiv}>
          <div className={common.desertPageBodyDiv}>
            <br />
            Your Faith Journey
            {
            
            pillars.map(({ name, age, cars}) => {
                return (<div>{name}</div>);
            })
            }
          </div>
        </div>
      </div>
  );
}

export default MyPillars;
