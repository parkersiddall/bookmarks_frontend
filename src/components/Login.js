import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

// services
import loginService from '../services/login'

// components
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  pageRightContainer: {
    position: 'absolute',
    right: '0px',
    height: '100vh',
    width: '30vw',
    minWidth: '400px',
    background: 'white'
  },
  pageLeftContainer: {
    position: 'absolute',
    right: '30vw',
    height: '100vh',
    width: '100%',
    background: 'url(https://i.redd.it/xrxwrj9e7l971.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'

  }
}))

const Login = () => {

  const classes = useStyles()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      // log user in
      const user = await loginService.login({username, password})
     
      // save user info (username and token) to local storage
      window.localStorage.setItem(
        'loggedBookmarksUser', JSON.stringify(user)
      )
      // call dispatch
      dispatch({
        type: 'SET_USER',
        data: user
      })

      // clear local state for forms
      setUsername('')
      setPassword('')
    } catch (error) {
      window.alert(error)
    }
  }

  return(
    <div >
      <div className={classes.pageLeftContainer}>
        sdfsd
      </div>
      <div className={classes.pageRightContainer}>
        <Container>
          <form onSubmit={handleLogin}>
          <div>
            <input
              label={'Username'}
              id={'username'}
              type={'text'}
              value={username}
              name={'username'}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <input
              label={'Password'}
              id={'password'}
              type={'password'}
              value={password}
              name={'password'}
              onChange = {({ target }) => setPassword(target.value)}
            />
          </div>

            <button
            id='login-button'
            variant="contained" 
            color="primary" 
            type="submit"
            >
              Login
            </button>
          </form>
        </Container>
      </div>
    </div>
  )
}

export default Login