import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/bookmarks'

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getUsersBookmarks = () => {
  const config = {
    headers: { Authorization: token},
  }
  const request = axios.get(baseUrl, config)
  return request.then(response => response.data)
}

export default { getUsersBookmarks, setToken }