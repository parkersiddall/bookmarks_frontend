import React, { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return(
    <div>
      <form>
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