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
        background: 'linear-gradient(to bottom, #99ccff 0%, #99bbee 100%)',
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
        height: '65vh',
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
        fontSize: '3em',
        fontFamily: 'Source Sans Pro',
        background: '-webkit-linear-gradient(#000, #333)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    subTitle: {
        textAlign: 'center',
        fontSize: '1em'
    },
    bigText: {
        marginLeft: '3em',
        marginRight: '3em',
        marginBottom: '1em',
        width: '80vw',
        fontSize: '5em',
        fontFamily: 'Source Sans Pro',
        background: '-webkit-linear-gradient(#000, #444)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    homeText: {
        fontFamily: 'Muli',
        marginLeft: '8em',
        marginRight: '3em',
        fontSize: '2em',
        width: '80vw',
        '& li': {
            marginBottom: '1em'
        }
    }
});


const Home = () => {
	const classes = useStyles();

	return (
        <div className={classes.homeContainerDiv}>
            <HomeNav />
            <div className={classes.homeIntroDiv}>
                <div className={classes.title}>Cloud and Fire</div>
                <div className={classes.subTitle}></div>
                <div className={classes.homeLogo}>
                    <CloudQueue className={classes.homeIcon} />
                    <div className={classes.homeVerse}>
                        And the LORD went before them by day in a pillar of cloud to lead them along the way... 
                        <br/>Exodus 13:21 (ESV)
                    </div>
                </div>
            </div>
            <div className={classes.homeScrollContainerDiv}>
                <div className={classes.homeScrollDiv0}>
                    <div className={classes.bigText}>Have you seen the Lord's pillar in your life?</div>
                    <div className={classes.homeText}>
                        Cloud and Fire was built in order for you to see how God has worked in your life 
                        to get you to the awesome person that you are today.
                    </div>
                </div>
                <div className={classes.homeScrollDiv1}>
                    <div className={classes.bigText}>This web application is...</div>
                    <div className={classes.homeText}>
                        <ul>
                            <li>designed to mark major moments of your faith (called pillars!).</li>
                            <li>a way to keep track of your prayer requests.</li>
                            <li>a place for you to reiterate and share your sermon and bible study notes.</li>
                            <li>developed in ReactJS, Node Express, and Prayer :)</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.homeScrollDiv2}>
                    <div className={classes.bigText}>A little history lesson...</div>
                    <div className={classes.homeText}>
                        In Exodus 13, God was leading his people from Egypt to the Promised Land.
                        As they traveled by the desert road to their destination, the Lord went ahead
                        of them in a pillar of cloud to guide them or a pillar of fire to give them
                        light.

                    </div>
                </div>
                <div className={classes.homeScrollDiv3}>
                    <div className={classes.bigText}>How has the Lord led you?</div>
                    <div className={classes.homeText}>
                        Has He guided you with a pillar of grace? 
                        Of healing? Of forgiveness? Of redemption? 
                        Of peace, joy, hope, love?

                        Yes!
                    </div>
                </div>
            </div>
            <div className={classes.homeEndDiv}>
                <div className={classes.homeLogoEnd}>
                    <Whatshot className={classes.homeIcon} />
                    <div className={classes.homeVerse}>
                        ... and by night in a pillar of fire to give them light, that they might travel by day and by night.
                        <br/>Exodus 13:21 (ESV)
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Home
