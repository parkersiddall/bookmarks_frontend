import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

// reducers
import { changeDrawerStatus } from '../reducers/drawerReducer'
import { setCategory } from '../reducers/categoryReducer'
import { clearFavorites } from '../reducers/favoritesReducer'

// components
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}))


const LeftDrawer = () => {
  const categorization = useSelector(state => state.colorCategorization)
  const drawerOpen = useSelector(state => state.drawer)
  const dispatch = useDispatch()
  const classes = useStyles()

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
            <ListItemText primary={'All'} />
          </ListItem>
          {Object.keys(categorization).map((category) => (
            <ListItem
              button
              key={category}
              onClick={() => dispatch(setCategory(category))}
            >
              <ListItemIcon>
                <BookmarkIcon
                  style={{color: `${categorization[category]}`}}
                />
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
            <ListItemText primary={'Clear favorites'} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default LeftDrawer