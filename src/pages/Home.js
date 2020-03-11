import React, { useState } from 'react'

import CloudQueue from '@material-ui/icons/CloudQueue'
import { makeStyles } from '@material-ui/core/styles'

import HomeNav from '../components/HomeNav'

const useStyles = makeStyles({
    homeContainerDiv: {
        width: '100vw',
        height: '80vh',
        color: 'black',
        background: 'linear-gradient(to bottom, #ffffff 0%, #99ccff 110%)'
    },
    homeLogo: {
        marginTop: '20vh',
        marginLeft: '10em',
        marginRight: '10em',
        textAlign: 'center'
    },
    homeIcon: {
        fontSize: '7em'
    },
    homeVerse: {
        marginTop: '2em',
        fontSize: '12px'
    }
});


const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.homeContainerDiv}>
            <div className={classes.homeLogo}>
                <CloudQueue className={classes.homeIcon} />
                <div className={classes.homeVerse}>
                    And the LORD went before them by day in a pillar of cloud to lead them along the way... Exodus 13:21 (ESV)
                </div>
            </div>
            <HomeNav />
		</div>
	)
}

export default Home
