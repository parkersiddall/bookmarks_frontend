import bookmarksService from '../services/bookmarksService'
import userService from '../services/userService'

export const initializeUser = () => {
  return async dispatch => {

    const loggedUserJSON = window.localStorage.getItem('loggedBookmarksUser')
    
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)

      // update token variable in bookmarks service
      bookmarksService.setToken(user.token)
      userService.setToken(user.token)

      // collect data about user
      const userData = await userService.getUserData(user.token)
      
      dispatch({
        type: 'SET_USER',
        data: userData
      })

    }
  }
}

const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.data

  default:
    return state
  }
}

export default userReducer