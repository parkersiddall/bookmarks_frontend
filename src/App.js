import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

// reducers
import { initializeFavorites } from './reducers/favoritesReducer'
import { initializeBookmarks } from './reducers/bookmarksReducer'

// components
import Bookmarks from './components/Bookmarks'
import Favorites from './components/Favorites'
import LeftDrawer from './components/LeftDrawer'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  topMarginForNavbar: {
    marginTop: '60px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }
}))

function App() {

  const drawerOpen = useSelector(state => state.drawer)
  const searchTerm = useSelector(state => state.search)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeFavorites())
    dispatch(initializeBookmarks())
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Navbar />
      <LeftDrawer />
      <main
        className={`${clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })} ${classes.topMarginForNavbar}`}
      >
        { searchTerm && <SearchResults />}
        { !searchTerm && <div><Favorites /><Bookmarks /></div> }
      </main>
    </div>
  )
}

export default App;
