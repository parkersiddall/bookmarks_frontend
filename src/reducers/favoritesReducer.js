import bookmarksService from '../services/bookmarksService'

export const initializeFavorites = (favorites) => {
  return async dispatch => {
    dispatch({
      type: 'INIT_FAVORITES',
      data: favorites
    })
    
  }
}

export const clearFavorites = () => {
  return async dispatch => {
    window.localStorage.removeItem('favorites')
    dispatch({
      type: 'CLEAR_FAVORITES',
      data: []
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
    const favoritesInStorage = window.localStorage.getItem('favorites')
    const favorites = JSON.parse(favoritesInStorage)

    // remove the favorite, save remaining to local storage
    const updatedFavorites = favorites.filter(fav => fav.url !== favorite.url)
    window.localStorage.setItem('favorites', JSON.stringify(updatedFavorites))

    dispatch({
      type: 'REMOVE_FAVORITE',
      data: favorite
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
    return state.filter(fav => fav.url !== action.data.url)

  case 'CLEAR_FAVORITES':
    return action.data

  default:
    return state
  }
}

export default favoritesReducer