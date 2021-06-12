import bookmarks from '../config/bookmarks'

export const initializeBookmarks = () => {
  return async dispatch => {
    dispatch({
      type: 'INIT_BOOKMARKS',
      data: bookmarks
    })
  }
}

const bookmarksReducer = (state = [], action) => {
    switch (action.type) {  
    
    case 'INIT_BOOKMARKS':
      return action.data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
      
    default:
      return state
    }
  }
  
export default bookmarksReducer