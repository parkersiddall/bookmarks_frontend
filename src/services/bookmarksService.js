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

const modifyBookmark = async (id, modification) => {
  const config = {
    headers: { Authorization: token},
  }

  const request = await axios.put(baseUrl + `/${id}`, modification, config)
  return request.data
}

const addBookmark = async newBookmark => {
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios.post(baseUrl, newBookmark, config)
  return request.data
}

const deleteBookmark = async id => {
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios.delete(baseUrl + `/${id}` , config)
  return request.data
}

export default { 
  getUsersBookmarks, 
  setToken, 
  modifyBookmark, 
  addBookmark, 
  deleteBookmark
}