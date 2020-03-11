import React, { useState } from 'react'

import CloudQueue from '@material-ui/icons/CloudQueue'
import Whatshot from '@material-ui/icons/Whatshot'

import { makeStyles } from '@material-ui/core/styles'

import HomeNav from '../components/HomeNav'
import Footer from '../components/Footer'

const useStyles = makeStyles({
    homeContainerDiv: {
        width: '100vw'
    },
    homeIntroDiv: {
        height: '100vh',
        background: 'linear-gradient(to bottom, #ffffff 0%, #99ccff 100%)'
    },
    homeLogo: {
        marginTop: '14vh',
        marginLeft: '10em',
        marginRight: '10em',
        textAlign: 'center'
    },
    homeIcon: {
        fontSize: '7em',
    },
    homeVerse: {
        marginTop: '1em',
        fontSize: '14px'
    },
    homeScrollDiv0: {
        height: '100vh',
        background: 'linear-gradient(to bottom, #99ccff 0%, #99bbee 100%)'
    },
    homeScrollDiv1: {
        height: '100vh',
        background: 'linear-gradient(to bottom, #99bbee 0%, #bbaadd 100%)'
    },
    homeScrollDiv2: {
        height: '100vh',
        background: 'linear-gradient(to bottom, #bbaadd 0%, #ff99bb 100%)'
    },
    homeScrollDiv3: {
        height: '100vh',
        background: 'linear-gradient(to bottom, #ff99bb 0%, #ff7777 100%)'
    },
    homeEndDiv: {
        height: '100vh',
        background: 'linear-gradient(to bottom, #ff7777 0%, #ff4444 100%)'
    },
    homeLogoEnd: {
        marginLeft: '10em',
        marginRight: '10em',
        textAlign: 'center'
    },
    title: {
        marginTop: '1em',
        textAlign: 'center',
        fontSize: '3em'
    },
    subTitle: {
        textAlign: 'center',
        fontSize: '1em'
    }
});


const Home = () => {
	const classes = useStyles();

	return (
        <div className={classes.homeContainerDiv}>
            <div className={classes.homeIntroDiv}>
                <div className={classes.title}>Cloud and Fire</div>
                <div className={classes.subTitle}>A prayer application</div>
                <div className={classes.homeLogo}>
                    <CloudQueue className={classes.homeIcon} />
                    <div className={classes.homeVerse}>
                        And the LORD went before them by day in a pillar of cloud to lead them along the way... 
                        <br/>Exodus 13:21 (ESV)
                    </div>
                </div>
                <HomeNav location={"top"}/>
            </div>
            <div className={classes.homeScrollDiv0}>
                
            </div>
            <div className={classes.homeScrollDiv1}>
                
            </div>
            <div className={classes.homeScrollDiv2}>

            </div>
            <div className={classes.homeScrollDiv3}>
                
            </div>
            <div className={classes.homeEndDiv}>
                <div className={classes.homeLogoEnd}>
                    <Whatshot className={classes.homeIcon} />
                    <div className={classes.homeVerse}>
                        ... and by night in a pillar of fire to give them light, that they might travel by day and by night.
                        <br/>Exodus 13:21 (ESV)
                    </div>
                </div>
                <HomeNav location={"bottom"}/>
            </div>
            <Footer />
        </div>
	)
}

export default Home
