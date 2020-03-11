import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

import { makeStyles } from '@material-ui/core/styles'

import HomeNav from '../components/HomeNav';

function MyPillars() {

  const [checked, setChecked] = React.useState(true);

  return (
    <Grow in={checked}>
    <div>
        <HomeNav />
        sdfsfds
        
    </div>
    </Grow>
  );

}



export default MyPillars;
