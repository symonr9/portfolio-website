import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";

import { makeStyles } from "@material-ui/core/styles";

import useCommonStyles from "../styles/common";

import Pillar from "../components/Pillar";

const useStyles = makeStyles({
  pillarsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '9em',
    overflowX: 'scroll'
  }
});

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
  const classes = useStyles();
  const common = useCommonStyles();

  const [pillars, setPillars] = useState(null);

  
  const fetchData = async () => {
    fetch("http://localhost:9000/pillars")
      //.then(res => res.text())
      .then(res => res.json())
      .then(
        res => {
          setPillars(res);
          console.log("res is: ", res);
          console.log("type of pillars: ", typeof(pillars))
        }
        );
  }

  useEffect(() => {
    fetchData();
    // do anything only one time if you pass empty array []
    // keep in mind, that component will be rendered one time (with default values) before we get here
  }, [] )

  if (!pillars){
      return null;
  }

  return (
      <div className={common.pageContainerDiv}>
        <div className={common.pageDiv}>
          <div className={common.desertPageBodyDiv}>
            <br />
            Your Faith Journey
            <br/>
            <div className={classes.pillarsContainer}>
              { pillars.map(pillar => <Pillar key={pillar.id} {...pillar} />) }
            </div>
          </div>
        </div>
      </div>
  );
}

export default MyPillars;
