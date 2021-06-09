export const initializeFavorites = () => {
  return async dispatch => {
    const favoritesInStorage = window.localStorage.getItem('favorites')
    if(favoritesInStorage){
      const favorites = JSON.parse(favoritesInStorage)
      console.log(favorites)
      dispatch({
        type: 'INIT_FAVORITES',
        data: favorites
      })
    }
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

    const favoritesInStorage = window.localStorage.getItem('favorites')
    const favorites = JSON.parse(favoritesInStorage)

    if (favorites){
      // add new favorite to list, then save it back to storage
      const newFavorites = favorites.concat(favorite)
      window.localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
      // nothing has been saved in storage yet. Create, populate, save list
      const emptyList = []
      const populatedWithFav = emptyList.concat(favorite)
      window.localStorage.setItem('favorites', JSON.stringify(populatedWithFav))
    }

    dispatch({
      type: 'ADD_FAVORITE',
      data: favorite
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