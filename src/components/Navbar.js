import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx';

// reducers
import { changeDrawerStatus } from '../reducers/drawerReducer'

// components
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  customNavBar: {
    background: '#262626'
  },
  navBarTitle: {
    fontFamily: 'Georgia, Sans Serif'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  }
}))

const Navbar = () => {

  const drawerOpen = useSelector(state => state.drawer)
  const classes = useStyles()
  const dispatch = useDispatch()

  return(
    <div>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(changeDrawerStatus(!drawerOpen))}
          className={clsx(classes.menuButton, drawerOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.navBarTitle}>
            Bookmarks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar