import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

import { makeStyles } from '@material-ui/core/styles'
import useCommonStyles from '../styles/common'

const useStyles = makeStyles({
});

function CreatePillars() {
  const classes = useStyles();
  const common = useCommonStyles();
  const [checked, setChecked] = React.useState(true);

  return (
    <Grow in={checked}>
    <div className={common.pageContainerDiv}>
        <div className={common.pageDiv}>
            <div className={common.desertPageBodyDiv}>
                <br/>
                Create a pillar
            </div>
        </div>
        
    </div>
    </Grow>
  );

}



export default CreatePillars;
