import bookmarksService from '../services/bookmarksService'

export const initializeFavorites = (favorites) => {
  return async dispatch => {
    dispatch({
      type: 'INIT_FAVORITES',
      data: favorites
    })
    
  }
}

export const clearFavorites = (favorites) => {

  // service calls to remove all favorites
  const clearedFavs = favorites.map(async fav => {

    let modification = {
      isFavorite: false
    }
    
    const updated = await bookmarksService.modifyBookmark(fav._id, modification)
    
    return updated
  })

  return async dispatch => {
    dispatch({
      type: 'CLEAR_FAVORITES',
      data: null
    })
  }
}

export const addFavorite = (favorite) => {
  return async dispatch => {

    const modification = {
      isFavorite: true
    }

    const addedFavorite = await bookmarksService.modifyBookmark(favorite._id, modification)

    // factor back in the reddit data that is not processed by the API endpoint
    addedFavorite.redditPost = favorite.redditPost

    dispatch({
      type: 'ADD_FAVORITE',
      data: addedFavorite
    })
  }
}

export const removeFavorite = (favorite) => {
  return async dispatch => {

    const modification = {
      isFavorite: false
    }

    const removedFavorite = await bookmarksService.modifyBookmark(favorite._id, modification)

    // factor back in the reddit data that is not processed by the API endpoint
    removedFavorite.redditPost = favorite.redditPost

    dispatch({
      type: 'REMOVE_FAVORITE',
      data: removedFavorite
    })
  }
}

const favoritesReducer = (state = [], action) => {
  switch (action.type) { 
    
  case 'INIT_FAVORITES':
    return action.data

  case 'ADD_FAVORITE':
    return state.concat(action.data)

  case 'REMOVE_FAVORITE':
    return state.filter(fav => fav._id !== action.data._id)

  case 'CLEAR_FAVORITES':
    return []

  default:
    return state
  }
}

export default favoritesReducer