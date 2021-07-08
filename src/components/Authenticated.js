import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from '../styles/App'
import clsx from 'clsx'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// reducers
import { initializeBookmarks } from '../reducers/bookmarksReducer'
import { initializeUser } from '../reducers/userReducer'

// components
import Bookmarks from '../components/Bookmarks'
import Favorites from '../components/Favorites'
import LeftDrawer from '../components/LeftDrawer'
import Navbar from '../components/Navbar'
import SearchResults from '../components/SearchResults'


const Authenticated = () => {
  
  const classes = useStyles()
  const drawerOpen = useSelector(state => state.drawer)
  const searchTerm = useSelector(state => state.search)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBookmarks()) // favorites and categorites initialized within bookmarks reducer
    // eslint-disable-next-line
  }, [])

  // manage dark mode
  let darkSetting = false

  if (user) {
    darkSetting = user.prefersDark
  }

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkSetting ? 'dark' : 'light',
        },
      }),
    [darkSetting],
  );
  
  return(
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </div>
  )
}

export default Authenticated