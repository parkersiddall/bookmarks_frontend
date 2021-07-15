import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// reducers
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
