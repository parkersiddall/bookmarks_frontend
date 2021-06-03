export const initializeFavorites = () => {
  return async dispatch => {
    const favoritesInStorage = window.localStorage.getItem('favorites')
    if(favoritesInStorage){
      const favorites = JSON.parse(favoritesInStorage)
      dispatch({
        type: 'INIT',
        data: favorites
      })
    }
  }
}

const favoritesReducer = (state = [], action) => {
  switch (action.type) { 
    
  case 'INIT':
    return action.data

  default:
    return state
  }
}

export default favoritesReducer