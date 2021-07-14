// name of file should be renamed to indicate that it also holds the call to register new users

import axios from 'axios'
const baseUrl = ''

const login = async credentials => {
  const response = await axios.post(baseUrl + '/api/login', credentials)
  return response.data
}

const register = async (newUser) => {
  const response = await axios.post(baseUrl + '/api/users', newUser)
  return response.data
}

export default { login, register }