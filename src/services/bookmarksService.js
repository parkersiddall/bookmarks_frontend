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
  console.log(request.data)
  return request.data
}

export default { getUsersBookmarks, setToken, modifyBookmark }