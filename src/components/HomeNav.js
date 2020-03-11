import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Hamburger from "./Hamburger";

import CloudQueue from '@material-ui/icons/CloudQueue'
import Whatshot from '@material-ui/icons/Whatshot'

const useStyles = makeStyles({
	homeNav: {
        height: '100%',
        width: '10em',
        position: 'fixed',
        zIndex: '1',
        top: '0',
        left: '0',
        overflowX: 'hidden',
        marginTop: '1em',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        '& a': {
            background: 'linear-gradient(to right, #ffff88 0%, #ffffff 100%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'black',
            padding: '1em 2em',
            textDecoration: 'none',
            marginTop: '1em',
            marginLeft: '0.5em',
            marginRight: '0.5em',
            '&:hover': {
                transition: '.4s ease-in-out',
                WebkitTransition: 'height .4s ease-in-out',
                MozTransition: 'height .4s ease-in-out',
                background: 'linear-gradient(to right, #ffff88 40%, #ffffff 100%)',
                color: 'black'
            }
          }
    },
    homeLogo: {
        display: 'flex',
        display: 'row'
    },
    cloudLogoSize: {
        fontSize: '3em',
    },
    fireLogoSize: {
        fontSize: '3em',
        marginLeft: '-26px',
        marginBottom: '-15px'
    }
});


function HomeNav() {
    const classes = useStyles();

    return (
        <div className={classes.homeNav}>
            <div className={classes.homeLogo}>
                <CloudQueue className={classes.cloudLogoSize} />
                <Whatshot className={classes.fireLogoSize} />
            </div>
            <NavLink to="/prayers">Prayers</NavLink>
            <NavLink to="/pillars">My Pillars</NavLink>
            <NavLink to="/pillars/create">Create</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    );
}

export default HomeNav;
