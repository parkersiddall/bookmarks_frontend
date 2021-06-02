import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// components
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  customNavBar: {
    background: '#262626'
  },
  navBarTitle: {
    fontFamily: 'Georgia, Sans Serif'
  }
}))

const Navbar = () => {

  const classes = useStyles()

  return(
    <div>
      <AppBar position='fixed' className={classes.customNavBar}>
        <Toolbar>
          <IconButton>
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