import React from 'react'
import useStyles from '../styles/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx';

// reducers
import { changeDrawerStatus } from '../reducers/drawerReducer'
import { setSearchFilter } from '../reducers/searchReducer'

// components
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {

  const classes = useStyles()
  const drawerOpen = useSelector(state => state.drawer)
  const dispatch = useDispatch()

  return(
    <div className={classes.root}>
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              autoFocus
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => dispatch(setSearchFilter(event.target.value))}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar