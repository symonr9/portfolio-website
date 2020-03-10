import React, { useState } from 'react'
import { getData } from 'services/apiCalls'
import { backendRoutes } from 'siteData/routes'
import List from 'atomicDesign/organisms/List/List'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'

import FolderIcon from '@material-ui/icons/Folder'
import { makeStyles } from '@material-ui/core/styles'
import SectionTitle from 'atomicDesign/atoms/SectionTitle/SectionTitle'

const useStyles = makeStyles({
	root: {
		width: '100%',
		backgroundColor: 'rgb(230, 238, 244)'
	}
});

const Home = () => {
	const classes = useStyles();

	return (
		<div className="">
			Hello
		</div>
	)
}

export default Home
