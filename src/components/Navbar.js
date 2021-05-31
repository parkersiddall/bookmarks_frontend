import React from 'react'

// components
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {


  return(
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Bookmarks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar