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

export const addBookmark = (newBookmark, user) => {
  return async dispatch => {
    try {
      let addedBookmark = await bookmarksService.addBookmark(newBookmark)
      console.log('ADDING Bookmark, ', addedBookmark)

      // add in reddit picture
      addedBookmark.redditPost = {
        url: "https://preview.redd.it/4144hovyop871.jpg?width=640&crop=smart&auto=webp&s=3488b98d761fc4af08897f57a70bd3f8d51ece67",
        title: "test photo"
      }

      dispatch({
        type: 'ADD_BOOKMARK',
        data: addedBookmark,
      })
    } catch (error) {
      window.alert('Error: ', error)
        // load a notification
    }
  }
}

const bookmarksReducer = (state = [], action) => {
    switch (action.type) {  
    
    case 'INIT_BOOKMARKS':
      return action.data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)

    case 'ADD_BOOKMARK':
      return state.concat(action.data)
      
    default:
      return state
    }
  }
  
export default bookmarksReducer