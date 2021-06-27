import bookmarksService from '../services/bookmarksService'
import { initializeCategorization } from './categorizationReducer'
import { initializeFavorites } from './favoritesReducer'

export const initializeBookmarks = () => {
  return async dispatch => {
    // intialize bookmarks and save to redux
    const bookmarks = await bookmarksService.getUsersBookmarks()
    dispatch({
      type: 'INIT_BOOKMARKS',
      data: bookmarks
    })

    // initialize categories
    dispatch(initializeCategorization(bookmarks))

    // initialize favorites
    let favorites = []
    bookmarks.forEach(bookmark => {
      if (bookmark.isFavorite) {
        favorites.push(bookmark)
      }
    })
    dispatch(initializeFavorites(favorites))

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