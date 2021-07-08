import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './styles/App'
import clsx from 'clsx'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// reducers
import { initializeBookmarks } from './reducers/bookmarksReducer'
import { initializeUser } from './reducers/userReducer'

// components
import Authenticated from './components/Authenticated'
import Login from './components/Login'


function App() {
  
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeUser())
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
      <Authenticated />
    </div>
  )
}

export default App;
