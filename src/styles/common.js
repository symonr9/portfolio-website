import { makeStyles } from '@material-ui/core/styles'

const useCommonStyles = makeStyles({
    pageContainerDiv: {
        width: '100vw'
    },
    pageDiv: {
        height: '100vh',
        background: 'linear-gradient(to top, #ffff99 0%, #ffffcc 100%)'
    },
    desertPageBodyDiv: {
        marginLeft: '5em',
        marginRight: '5em',
        marginBottom: '1em',
        width: '80vw',
        fontSize: '3em',
        fontFamily: 'Source Sans Pro',
        background: '-webkit-linear-gradient(#000, #444)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    }
});


export default useCommonStyles