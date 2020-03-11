import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Hamburger from "./Hamburger";


const useStyles = makeStyles({
	homeNav: {
        marginTop: '10vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '13em',
        marginRight: '13em',
        '& a': {
            background: 'linear-gradient(to right, #ffff99 0%, #ffffff 100%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'black',
            padding: '1em 2em',
            textDecoration: 'none',
            '&:hover': {
                transition: '.4s ease-in-out',
                WebkitTransition: 'height .4s ease-in-out',
                MozTransition: 'height .4s ease-in-out',
                background: 'linear-gradient(to right, #ffff99 40%, #ffffff 100%)',
                color: 'black'
            }
          }
    }
});


function HomeNav() {
    const classes = useStyles();

    return (
        <div className={classes.homeNav}>
            <NavLink to="/">Prayers</NavLink>
            <NavLink to="/">Letters</NavLink>
            <NavLink to="/">Poetry</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">About Me</NavLink>
        </div>
    );
}

export default HomeNav;
