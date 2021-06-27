import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from '../styles/LeftDrawer'
import clsx from 'clsx'

// reducers
import { changeDrawerStatus } from '../reducers/drawerReducer'
import { setCategory } from '../reducers/categoryReducer'
import { clearFavorites } from '../reducers/favoritesReducer'

// components
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarksIcon from '@material-ui/icons/Bookmarks'
import DeleteIcon from '@material-ui/icons/Delete'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const LeftDrawer = () => {

  const classes = useStyles()
  const categories = useSelector(state => state.categorization)
  const drawerOpen = useSelector(state => state.drawer)
  const dispatch = useDispatch()

  const categoriesAlphaOrdered = categories.sort((a, b) => 
      a.toLowerCase() > b.toLowerCase() ? 1 : -1)

  const handleLogout = () => {
    console.log('You are now logged out.')
    window.localStorage.removeItem('loggedBookmarksUser')
    dispatch({
      type: 'SET_USER',
      data: null
    })
  }

  return(
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => dispatch(changeDrawerStatus(!drawerOpen))}
            className={clsx(classes.menuButton, drawerOpen && classes.hide)}
            >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => dispatch(setCategory('All'))}
          >
              <ListItemIcon>
                <BookmarksIcon />
              </ListItemIcon>
            <ListItemText primary={'All'} />
          </ListItem>
          {categoriesAlphaOrdered.map((category) => (
            <ListItem
              button
              key={category}
              onClick={() => dispatch(setCategory(category))}
            >
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary={category}/>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => dispatch(clearFavorites())}
          >
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
            <ListItemText primary={'Clear favorites'} />
          </ListItem>
          <ListItem
            button
            onClick={handleLogout}
          >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
            <ListItemText primary={'Logout'} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default LeftDrawer