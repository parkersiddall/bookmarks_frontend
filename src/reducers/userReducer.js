export const initializeUser = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem('loggedBookmarksUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch({
        type: 'SET_USER',
        data: user
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