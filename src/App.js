import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './styles/App'
import clsx from 'clsx'

// reducers
import { initializeFavorites } from './reducers/favoritesReducer'
import { initializeBookmarks } from './reducers/bookmarksReducer'
import { initializeColorCategorization } from './reducers/colorCategorizationReducer'

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
  const user = null // for testing
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeFavorites())
    dispatch(initializeBookmarks())
    // eslint-disable-next-line
  }, [])

  // TODO check to see if this can be done in a more solid way
  const bookmarks = useSelector(state => state.bookmarks)
  dispatch(initializeColorCategorization(bookmarks))

  if (!user) {
    return(
      <Login />
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
