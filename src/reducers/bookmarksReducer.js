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

      dispatch({
        type: 'ADD_BOOKMARK',
        data: addedBookmark,
      })
    } catch (error) {
      window.alert('Error: ', error)
        // load a notification
    }

    // add category to left drawer
    const bookmarks = await bookmarksService.getUsersBookmarks()
    dispatch(initializeCategorization(bookmarks))
  }
}

export const deleteBookmark = (bookmark) => {
  return async dispatch => {
    try {
      await bookmarksService.deleteBookmark(bookmark._id)

      dispatch({
        type: 'DELETE_BOOKMARK',
        data: bookmark._id,
      })
    } catch (error) {
      window.alert('Error: ', error)
        // load a notification
    }

    // add category to left drawer
    const bookmarks = await bookmarksService.getUsersBookmarks()
    dispatch(initializeCategorization(bookmarks))
  }
}

export const editBookmark = (redditPost, id, modification) => {
  return async dispatch => {
    try {
      // send modifications to backend
      const response = await bookmarksService.modifyBookmark(id, modification)

      // add in the existing reddit post
      response.redditPost = redditPost

      dispatch({
        type: 'EDIT_BOOKMARK',
        data: response,
      })

      // update left drawer categories
      const bookmarks = await bookmarksService.getUsersBookmarks()
      dispatch(initializeCategorization(bookmarks))

      // re-initialize favorites
      let favorites = []
      bookmarks.forEach(bookmark => {
        if (bookmark.isFavorite) {
          favorites.push(bookmark)
        }
      })
      dispatch(initializeFavorites(favorites))

    } catch (error) {
      console.log(error)
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

    case 'DELETE_BOOKMARK':
      return state.filter(bookmark => bookmark._id !== action.data)

    case 'EDIT_BOOKMARK':
      // TODO: see if it is possible to index into the same position. It currently throws the modification to the end. 
      const filtered = state.filter(bookmark => bookmark._id !== action.data._id)

      return filtered.concat(action.data)
      
    default:
      return state
    }
  }
  
export default bookmarksReducer