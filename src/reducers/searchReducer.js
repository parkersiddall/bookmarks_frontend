export const setSearchFilter = (input) => {
  return async dispatch => {
    dispatch({
      type: 'SET_SEARCH_FILTER',
      data: input
    })
  }
}

const searchReducer = (state = '', action) => {
  switch (action.type) { 
    
    case 'SET_SEARCH_FILTER':
      return action.data

    default:
      return state
  }
}

export default searchReducer