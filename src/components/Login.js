import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// services
import loginService from '../services/login'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({username, password})
      window.localStorage.setItem(
        'loggedBookmarksUser', JSON.stringify(user)
      )
      // call dispatch
      dispatch({
        type: 'SET_USER',
        data: user
      })

      console.log(user.token)
      setUsername('')
      setPassword('')
    } catch (error) {
      window.alert(error)
    }
  }

  return(
    <div>
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
    </div>
  )
}

export default Login