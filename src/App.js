import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './styles/App'
import clsx from 'clsx'

// reducers
import { initializeFavorites } from './reducers/favoritesReducer'
import { initializeBookmarks } from './reducers/bookmarksReducer'
import { initializeUser } from './reducers/userReducer'

// components
import Bookmarks from './components/Bookmarks'
import Favorites from './components/Favorites'
import LeftDrawer from './components/LeftDrawer'
import Login from './components/Login'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults'

function App() {

  const classes = useStyles()
  const drawerOpen = useSelector(state => state.drawer)
  const searchTerm = useSelector(state => state.search)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeUser())
    dispatch(initializeFavorites())
    dispatch(initializeBookmarks())
    // eslint-disable-next-line
  }, [])

  // TODO: When the page reload the login form flashes. Needs to be fixed.
  if (!user) {
    return(
      <div>
        <Login />
      </div>
    )
  }

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
