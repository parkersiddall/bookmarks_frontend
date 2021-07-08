import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

// services
import loginService from '../services/login'
import { initializeUser } from '../reducers/userReducer'

// components
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'

const prettyBackground = [
  "https://i.imgur.com/4DA9jxT.jpg",
  "https://i.redd.it/ggchwfr82q971.jpg",
  "https://i.redd.it/g8w1nuzbon971.jpg",
  "https://i.redd.it/jjq20pvhun971.jpg"
]

const randomElement = prettyBackground[Math.floor(Math.random() * prettyBackground.length)]

const useStyles = makeStyles((theme) => ({
  pageRightContainer: {
    position: 'absolute',
    right: '0px',
    height: '100vh',
    width: '400px',
    background: 'white',
    boxShadow: "-10px 0px 100px black"
  },
  pageLeftContainer: {
    position: 'absolute',
    right: '400px',
    height: '100vh',
    width: '100%',
    background:  `url(${randomElement})`,
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
      dispatch(initializeUser())

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
      </div>
      <div className={classes.pageRightContainer}>
        <Container>
          <Box my={5}>
            <Typography variant={'h3'} color={'primary'}>
              Bookmarke<span style={{color: 'black'}}>r/</span>
            </Typography>
            <Typography variant={'subtitle1'}>
              With pretty pictures from your favorite subreddits
            </Typography>
          </Box>
          <br/>
          <Box mt={5} mb={2}>
            <Typography variant={'h5'}>
              <b>Log in to your account</b>
            </Typography>
            <br/>
            <form onSubmit={handleLogin}>
              <TextField
                label={'Username'}
                id={'username'}
                type={'text'}
                value={username}
                name={'username'}
                margin={'dense'}
                variant={'outlined'}
                fullWidth
                required
                onChange={({ target }) => setUsername(target.value)}
              />
              <TextField 
                label={'Password'}
                id={'password'}
                type={'password'}
                value={password}
                name={'password'}
                margin={'dense'}
                variant={'outlined'}
                fullWidth
                required
                onChange = {({ target }) => setPassword(target.value)}
              />
              <Box m={1}></Box>
              <Button
                id='login-button'
                color='primary'
                type='submit'
                margin={'dense'}
                variant={'contained'}
                fullWidth
              >
                Login
              </Button>
            </form>
          </Box>
          <Divider />
          <Box mt={2}>
            <Button
                  id='sign-up-button'
                  fullWidth
            >
              Create an Account
            </Button>

          </Box>
        </Container>
      </div>
    </div>
  )
}

export default Login